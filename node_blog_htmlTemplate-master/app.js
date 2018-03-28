var express = require('express');
var app = express();
var engine = require('ejs-locals');
app.engine('ejs',engine);
app.set('views','./views');
app.set('view engine','ejs');

var index = require('./routes/index');

app.use('/index',index);


var port = 3000;
app.listen(port);