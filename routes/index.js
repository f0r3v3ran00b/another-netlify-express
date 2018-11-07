var express = require('express');
var moment = require('moment')

const name = process.env.MY_NAME || `[Name not set in environment variables]`

const router = express.Router();
router.get('/', (req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/html'
  });
  res.write('<h1>Hello from Express.js!!!!</h1>');
  res.end();
});

router.get('/hola', (req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/html'
  });
  res.write('<h1>Hola!</h1>');
  res.end();
});

router.get('/another', (req, res) => res.json({
  route: req.originalUrl
}));

router.post('/', (req, res) => res.json({
  postBody: req.body
}));



module.exports = router;
