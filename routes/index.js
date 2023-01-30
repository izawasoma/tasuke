var express = require('express');
var router = express.Router();
var admin = require('./../db/infra/admin');

/* GET home page. */
router.get('/', async function(req, res, next) {
  result = await admin.Get();
  console.log(result);
  res.render('index', { title: 'Express' });
});

module.exports = router;
