const express = require('express');
const router = express.Router();
const api = require('./api');

router.get('/feedback', (req, res, next) => {
    console.log('111')
  api.feedback(req, res, next);
});

module.exports = router;