const express = require('express')
const app = express()
const PORT = process.env.PORT||5000;
const mongoose = require('mongoose')
const actorRoutes = require('./routes/actor')
require('dotenv').config()
const MONOGO_URL=process.env.MONOGO_URL

app.use(express.json())//middleware

app.get("/", (req,res) =>{
    res.send("movie actors")
})

app.use('/actors', actorRoutes)

mongoose.connect(MONOGO_URL, {}).then(()=> console.log("DB connected"))
.catch(err => console.error(err))


app.listen(PORT,() => {
    console.log("welcome to api")
})
