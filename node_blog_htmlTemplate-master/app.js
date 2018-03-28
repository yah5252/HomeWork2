var express = require('express');
var app = express();

var index = require('./routes/index');

app.use('/index',index);


var port = 3000;
app.listen(port);