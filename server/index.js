const express = require('express')
const app = express();
var path = require('path');
var bodyParser = require('body-parser')
const routes  =  require('./routes/routes');

var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/websitemaker")

app.use(bodyParser.json({ limit: '20mb' }));
app.use(bodyParser.urlencoded({ limit: '20mb', extended: false }));
app.use('/api/v1', routes);



app.listen(9000, () => {
    console.log('Example app listening on port 9000!')
});


