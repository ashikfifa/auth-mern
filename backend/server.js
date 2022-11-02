const express = require("express");
const notes = require('./data/notes');
const dotenv =require('dotenv')
const userRoutes =require('./routes/userRoutes');
const connectDB  = require("./config/db.js");
const { notFound, errorHandler } = require("./middlewares/errorMiddleware");


const app= express();
dotenv.config();
connectDB();

app.use(express.json());


app.get("/",(req,res)=>{
    res.send("api is running");
});

app.get("/data/notes",(req,res)=>{
    res.send(notes);
});


app.use('/data/users',userRoutes); 

app.use(notFound);
app.use(errorHandler);

const PORT=process.env.PORT || 5000;

app.listen(PORT,console.log(`server is running on port ${PORT}`));