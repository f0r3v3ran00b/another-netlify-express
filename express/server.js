'use strict';
const express = require('express');
const serverless = require('serverless-http');
var indexRouter = require('../routes/index');
var viceRouter = require('../routes/vice');


const app = express();
const bodyParser = require('body-parser');

var routerToUse = indexRouter;
// var routerToUse = viceRouter;

app.use('/', routerToUse);
app.use(bodyParser.json());
app.use('/.netlify/functions/server', routerToUse); // path must route to lambda
app.use('/.netlify/functions/viceserver', viceRouter); // path must route to lambda

module.exports = app;
module.exports.handler = serverless(app);
