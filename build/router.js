var DB = require('./mongoose');

var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/index', function(req, res) {
  DB.find({cellphone: req.body.cellphone}, function (err, result) {
    console.log(err, result);
    if (result.length) {
      res.end('cellphone exist');
    } else {
      res.end('Not found');
    }
  });
});

router.post('/reg', function (req, res) {
  DB.create({cellphone: req.body.cellphone}, function (err, res) {
    console.log(err, res);
  });
  res.end('reg ok');
});

module.exports = router;
