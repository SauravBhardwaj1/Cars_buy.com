const express = require('express');
require('dotenv').config()

const app = express();

app.use(express.json())


app.get("/", (req, res) => {
    res.status(200).json({msg: "This is a car buy and sell application!"});
})


app.listen(process.env.PORT, async()=>{
    try {
        await connection
        console.log("Connected to server")
    } catch (error) {
        console.log(error.message)
    }
    console.log(`server listening on ${process.env.PORT}`)
})