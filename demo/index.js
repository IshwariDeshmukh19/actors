const express = require('express')
const app = express()

app.get("/", (req, res) => {
    res.send("welcome....")
})

app.get("/api/:id", (req, res) => {
    const theId = req.params.id
    res.send(`the id is : ${theId}`)
})

app.listen(5002, () => {
    console.log("welcome to api")
})
