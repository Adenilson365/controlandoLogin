require('dotenv').config();
const express = require('express');
const userRouter = require('./routes/userRouter');
const mongoose = require('mongoose');

const app = express();
app.use("/user", express.json(), userRouter);

mongoose.connect(process.env.URL).then(()=>{
    console.log("Conectado")
}).catch((error)=>{
    console.log(error);
})
app.listen(process.env.PORT, ()=>{console.log("Rodando na: ", process.env.PORT)});

