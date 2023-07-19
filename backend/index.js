const express = require('express');
const { connection } = require('./config/db');
const { auth } = require('./middlewares/auth.middleware');
const cors = require('cors');
const { userRoutes } = require('./routes/UserRoutes');
const { OemRoutes } = require('./routes/OemRoutes');
require('dotenv').config()

const app = express();

app.use(express.json())
app.use(cors())
app.use(auth)

app.use("/user", userRoutes)
app.use("/oem", OemRoutes);


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