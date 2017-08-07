var express = require('express');
var router = express.Router();
const models = require('../models/');

router.get('/', (req, res, next) => {
  res.send('hello for /users!');
});
