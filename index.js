const express = require('express');
const PORT = 5000;
const app = express();
const mongoose = require("mongoose");
const productRoute = require("./routes/product");


//------------ DB Configuration ------------//
const db = require('./config/key').MongoURI;


//------------ Mongo Connection ------------//
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Successfully connected to MongoDB"))
    .catch(err => console.log(err));

//For Reading JSON format 
app.use(express.json());

//For Routes
app.use("/products", productRoute);

//Server is listenning that port
app.listen(PORT,()=>{
    console.log(`Backend Server running on PORT ${PORT}`);
})

