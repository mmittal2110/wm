const express = require('express')
const app = express();
var path = require('path');
var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/websitemaker");

app.listen(9000, () => {
    console.log('Example app listening on port 9000!')
});


