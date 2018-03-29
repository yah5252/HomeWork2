var express = require('express');
var router = express.Router();
var firebaseAdminDb = require('../connection/firebase-admin');

const ref = firebaseAdminDb.ref('any');
ref.once('value',function(sanpshot){
    console.log(sanpshot.val());
})

router.get('/', function(req, res,next) {
    res.render('index',{title:'Express'});
});

router.get('/post', function(req, res,next) {
    res.render('post',{title:'Express'});
});

router.get('/dashboard/article', function(req, res,next) {
    res.render('dashboard/article',{title:'Express'});
});

router.get('/dashboard/archives', function(req, res,next) {
    res.render('dashboard/archives',{title:'Express'});
});


router.get('/dashboard/categories', function(req, res,next) {
    res.render('dashboard/categories',{title:'Express'});
});

router.get('/dashboard/signup', function(req, res,next) {
    res.render('dashboard/signup',{title:'Express'});
});




module.exports = router;
