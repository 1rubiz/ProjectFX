const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()
const mongoose = require('mongoose')
const userRoute = require('./routes/userRoute')
const cookieParser = require('cookie-parser')
const cors = require ('cors')
const PORT = process.env.PORT || 5000
const app = express()
const errorHandler = require('./middlewares/errorMiddleware')


// const allowedOrigins = ['https://sunny-dango-c6e34e.netlify.app'];

//app.use(cors({
    //origin: allowedOrigins,
    //credentials: true,
  //}));
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended:false}))

//sunny-dango-c6e34e.netlify.app

// errorhandler
app.use(errorHandler)
app.use(cookieParser())
// routes
app.use("/call", (req, res)=>{
  console.log(req.body)
    res.sendStatus(200)
    });
// user route
app.use('/api/users',userRoute)

//app.use('/api/users',resultRoute)
mongoose
.connect(process.env.URI)
.then(()=>{
    app.listen(PORT, ()=>{
        console.log(`server running on port ${PORT}`.cyan.underline)
      })
})
.catch(
    (err)=>console.log(err)
)
