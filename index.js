const express = require('express')
const mongoose = require('mongoose');
const app = express()
require("dotenv").config()



app.get('/', (req, res) => {
    res.send("Hello from NODE API");
    });

    mongoose.connect(process.env.MONGO_LOCAL_URI)
    .then(() => {
        console.log("Connected to database");
        app.listen(3000, () => {
            console.log('server is running on port 3000')
        });
    })
    .catch(() => {

    });console.log("Connection failed");