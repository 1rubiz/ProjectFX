const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()
const cors = require ('cors')
const PORT = process.env.PORT || 5000
const app = express()
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

app.post('/askai', async (req, res)=>{
        console.log(req.body);
        const {prompt} = req.body;
        const text ='Based on the concepts of trading i.e crpto, forex and stock '
        // const answer = await askAi(text, prompt);
        // console.log(answer);
        // res.json({data:answer});

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
            .then(reply => {
                console.log('asking....')
               res.json({data: reply})
            })
            .catch(error => console.error(error));
        } catch(err){
            console.log(err)
        }
    
    })
