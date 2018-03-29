var express = require('express');
var app = express();
var engine = require('ejs-locals');

var path = require('path');

app.engine('ejs',engine);
//app.set('views','./views');
app.set('views', path.join(__dirname, 'views'));
app.engine('ejs', require('express-ejs-extend'));
app.set('view engine','ejs');

var index = require('./routes/index');




app.use('/index',index);



var port = 3000;
app.listen(port);