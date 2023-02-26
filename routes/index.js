var express = require('express');
var router = express.Router();
var admin = require('./../db/infra/admin');
const { Client } = require('pg');

/* GET home page. */
router.get('/', async function(req, res, next) {
 
  const client = new Client({
    user: 'yzkgynjeuyrdts',
    host: 'ec2-54-160-109-68.compute-1.amazonaws.com',
    database: 'd54n1qq9id49kn',
    password: 'ae2caf0bbc24c575f67d08ba0427143e7c8c4b051f27809e0696ab8ddf7c41d1',
    port: '5432',
    ssl: {
      rejectUnauthorized: false
    }
  });

  await client.connect((err) => {
    if (err) {
      console.error('connection error', err.stack)
    } else {
      console.log('connected')
    }
  });

  let data;

  await client.query('SELECT * from admins')
  .then((result) => {
    console.log(result.rows);
    data = result.rows;
    client.end();
  })
  .catch((e) => {
    console.error(e.stack);
  });
  
  res.render('index', { title: 'Express', data: data });
  
});

module.exports = router;
