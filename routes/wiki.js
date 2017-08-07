const express = require('express');
const router = express.Router();
// const models = require('../models/');

router.get('/', (req, res, next) => {
  res.send('hello for /wiki!');
});


//exports
module.exports = router;
