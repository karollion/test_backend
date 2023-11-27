const express = require('express');
const router = express.Router();

const TestController = require('../controllers/test.controller');

router.get('/tests', TestController.getAll);

module.exports = router;