var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/s', function(req, res, next) {
  console.log(req.body.Search[0].Year);
  res.send('respond with a resource');
});

module.exports = router;
