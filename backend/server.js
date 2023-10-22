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
const jwt = require('jsonwebtoken');
const { ClerkExpressWithAuth } = require('@clerk/clerk-sdk-node')
// const clerkClient = require('@clerk/clerk-sdk-node/instance');
// const allowedOrigins = ['https://sunny-dango-c6e34e.netlify.app'];

app.use(cors({
    origin: 'http://localhost:5173', // Update with the actual client URL
  credentials: true,
  }));
// app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended:false}))

//sunny-dango-c6e34e.netlify.app

// errorhandler
app.use(errorHandler)
app.use(cookieParser())
// routes
app.use("/call", (req, res)=>{
  // console.log(req.body)
    console.log(req.cookies.token);
    res.sendStatus(200)
    });

app.use('/verify', (req, res) => {
  const publicKey = process.env.CLERK_PEM_PUBLIC_KEY; // Replace with your actual public key
  const token = req.cookies.__session;
  // console.log(cookies);
  // Get the token from the request body or headers (depending on your use case)
  // const token = req.body.token || req.headers.authorization;

  if (!token) {
    return res.status(401).json({ error: 'Token not provided' });
  }

  try {
    const decoded = jwt.verify(token, publicKey, { algorithms: ['RS256'] });

    // The token is valid, and `decoded` now contains the token payload
    return res.status(200).json({ payload: decoded });
  } catch (error) {
    return res.status(401).json({ error: 'Invalid Token' });
  }
  // res.sendStatus(200)
});

app.get('/verify-token', (req, res) => {
  const publicKey = process.env.CLERK_JWT_KEY;
  const cookies = new Cookies(req, res);
  const sessToken = cookies.get('__session');
  const token = req.headers.authorization;

  if (sessToken === undefined && token === undefined) {
    res.status(401).json({ error: 'Not signed in' });
    return;
  }

  try {
    let decoded = '';
    if (token) {
      decoded = jwt.verify(token, publicKey);
      res.status(200).json({ sessToken: decoded });
      return;
    } else {
      decoded = jwt.verify(sessToken, publicKey);
      res.status(200).json({ sessToken: decoded });
      return;
    }
  } catch (error) {
    res.status(400).json({ error: 'Invalid Token' });
    return;
  }
});
const authorizedParties = ['http://localhost:3000', 'https://project-fx-teal.vercel.app'];
const clerkApiKey = process.env.CLERK_JWT_KEY;
// app.use(ClerkExpressRequireAuth({ authorizedParties }));

console.log(process.env.CLERK_JWT_KEY) 
// const clerk = clerkClient({ jwtKey: process.env.CLERK_JWT_KEY });
// import "dotenv/config"; // To read CLERK_API_KEY

// import express from 'express';
 
// const port = process.env.PORT || 3000;
// const app = express();
 
// Use the strict middleware that raises an error when unauthenticated
app.get('/protected-endpoint',ClerkExpressWithAuth({
    // ...options
    // clerkApiKey,
    // authorizedParties
  }),
  (req, res) => {
    console.log('success')
    res.json(req.auth);
  }
);
 

 
// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`);
// });
 
 
// user route
app.use('/api/users',userRoute)

app.post('/askai', async (req, res)=>{
        console.log(req.body);
        const {prompt} = req.body;
        const text ='Based on the concepts of trading i.e crpto, forex and stock '
        const answer = await askAi(text, prompt);
        res.send(answer);
    })

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


const askAi = async (text, prompt) => {
    try{
        const url = 'https://api.openai.com/v1/completions';
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer `+process.env.AI
            },
            body: JSON.stringify({

                prompt: `${prompt } ${text}`,
                max_tokens: 1000,
                temperature: 0.8,
                // stop: [ "?", "!"],
                n: 1,
                frequency_penalty: 0.2,
                presence_penalty: 0.5,
                model: 'text-davinci-003',
                
                best_of: 3,
            })
        };
        
        // Make the API request to Open Ai (gpt-3)
        fetch(url, options)
            .then(response => response.json())
            .then(data => {
                console.log('asking....')
                if (data && data.choices && data.choices.length > 0) {
                    const responseText = data.choices[0].text.trim();
                    const orderedListRegex = /^\d+\.\s+/gm;
                    const hasOrderedList = orderedListRegex.test(responseText);
                    
                    if (hasOrderedList) {
                        const orderedList = responseText.split('\n');
                        const orderedListFormatted = orderedList.reduce((acc, item, index) => {
                          if (item) {
                            acc += ` ${item.replace(/\n/g, '')}<br>`;
                          }
                          return acc;
                        }, '');
                        data.choices[0].text = orderedListFormatted;
                      }
                    console.log(data);
                }
                console.log(data)
            })
            .catch(error => console.error(error));
    } catch(err){
        console.log(err)
    }
  }    


app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(401).send('Unauthenticated!');
});