require('dotenv').config();
const express = require('express');
const userRouter = require('./routes/userRouter');
const mongoose = require('mongoose');
const adminRouter = require('./routes/adminRouter');
const app = express();


mongoose.connect(process.env.URL).then(()=>{
    console.log("Conectado")
}).catch((error)=>{
    console.log(error);
})
app.use("/user", express.json(), userRouter);
app.use('/admin', express.json(), adminRouter)
app.listen(process.env.PORT, ()=>{console.log("Rodando na: ", process.env.PORT)});

