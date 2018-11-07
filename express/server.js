'use strict';
const express = require('express');
const serverless = require('serverless-http');
var indexRouter = require('../routes/index');


const app = express();
const bodyParser = require('body-parser');


app.use('/', indexRouter);
app.use(bodyParser.json());
app.use('/.netlify/functions/server', indexRouter); // path must route to lambda

module.exports = app;
module.exports.handler = serverless(app);
