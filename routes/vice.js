var express = require('express');
var moment = require('moment')

const name = process.env.MY_NAME || `[Name not set in environment variables]`

const router = express.Router();
router.get('/', (req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/html'
  });
  res.write('<h1>Wine!</h1>');
  res.end();
});

module.exports = router;
