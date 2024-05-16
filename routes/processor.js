const express = require('express');
const {getProcessors} = require('../controllers/processorController');
const router = express.Router();

router.post('/api/processors', getProcessors);

module.exports = router;