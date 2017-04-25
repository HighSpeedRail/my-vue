var DB = require('./mongoose');

var express = require('express');
var router = express.Router();

var verification_code = null;

router.post('/index', function(req, res) {
  DB.find({cellphone: req.body.cellphone, password: req.body.password}, function (err, result) {
    if (result.length) {
      res.end('Pass');
    } else {
      res.end('Wrong');
    }
  });
});

router.post('/reg', function (req, res) {
  DB.find({cellphone: req.body.cellphone}, function (err, result) {
    if (result.length) {
      res.end('registered');
    } else {
      DB.create({cellphone: req.body.cellphone, password: req.body.password}, function (err, result) {
      });
      res.end('reg ok');
    }
  })
});

router.get('/verification_code', function (req, res) {
  var verification_code = Math.round(Math.random() * 8999 + 1000);
  res.end(verification_code.toString());
});

router.post('/verification_code', function (req, res) {

})

module.exports = router;
