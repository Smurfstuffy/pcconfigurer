const express = require('express');
const { getPartImageByName, getPartsByName } = require('../controllers/partsPriceController');

const router = express.Router();

router.post('/api/getpartspricebyname', getPartImageByName);

router.post('/api/getpartsbyname', getPartsByName);

module.exports = router;