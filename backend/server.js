const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()
const cors = require ('cors')
const PORT = process.env.PORT || 5000
const app = express()
const axios = require('axios');

// const allowedOrigins = ['https://sunny-dango-c6e34e.netlify.app'];

// app.use(cors({
//     origin: 'http://localhost:5173', // Update with the actual client URL
//   credentials: true,
//   }));
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended:false}))

//sunny-dango-c6e34e.netlify.app

// errorhandler
// app.use(cookieParser())
// routes

app.use("/call", (req, res)=>{
  // console.log(req.body)
    console.log(req.cookies.token);
    res.sendStatus(200)
    });

app.listen(PORT, ()=>{
    console.log(`server running on port ${PORT}`.cyan.underline)
})

app.post('/askai', async (req, res) => {
    // console.log(req.body);
    const { prompt } = req.body;
    const text = 'Based on the concepts of trading i.e crypto, forex, and stock';

    try {
        const url = 'https://api.openai.com/v1/completions';
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ` + process.env.AI
        };
        const data = {
            prompt: `${prompt} ${text}`,
            max_tokens: 1000,
            temperature: 0.8,
            n: 1,
            frequency_penalty: 0.2,
            presence_penalty: 0.5,
            model: 'text-davinci-003',
            best_of: 3,
        };

        const response = await axios.post(url, data, { headers });

        console.log('asking....');
        res.json({ data: response.data });
    } catch (err) {
        console.log(err);
    }
});
