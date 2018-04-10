var express = require('express');
var router = express.Router();
var foo = require('./example.json');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({foo});
});

module.exports = router;
