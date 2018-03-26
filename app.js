var express = require('express');
var app = express();



var engine = require('ejs-locals');
app.engine('ejs',engine);
app.set('views','./views');
app.set('view engine','ejs');

app.use(express.static('public'))

app.get('/',function(req,res){
   
    //res.send('<html><head></head><body><h1>profile</h1></body></html>')
     res.render('index');
})

app.get('/user',function(req,res){
    res.render('user');
})


var port =process.env.PORT || 3000;
app.listen(port);