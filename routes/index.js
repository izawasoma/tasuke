var express = require('express');
var router = express.Router();
var admin = require('./../db/infra/admin');
const { Client } = require('pg');

/* GET home page. */
router.get('/', async function(req, res, next) {
  
  res.render('index', { title: 'Express' });
  
});

module.exports = router;
