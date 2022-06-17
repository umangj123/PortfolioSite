var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/about', function(req, res){
  console.log("user has landed on about page")
  res.render('about', { title: 'Express' });
});

router.get('/projects', function(req, res){
  console.log("user has landed on about page")
  res.render('projects', { title: 'Express' });
});

router.get('/skills', function(req, res){
  console.log("user has landed on about page")
  res.render('skills', { title: 'Express' });
});


module.exports = router;
