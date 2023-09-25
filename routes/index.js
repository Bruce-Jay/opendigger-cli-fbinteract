var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/demo', function(req, res, next){
  res.sendFile('F:\\opendigger-cli\\demo\\views\\demo.html');
})

router.get('/query1', function(req, res, next){
  res.sendFile('F:\\opendigger-cli\\demo\\views\\query1.html');
})

module.exports = router;
