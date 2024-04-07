require('dotenv').config();
const express = require("express");
const app = express();
const port = process.env.APP_port;

app.get('/', function(req, res){
    res.send('Default Route')
});

app.listen(port, function(){
    console.log(`Server is Running on port ${port}`);
});