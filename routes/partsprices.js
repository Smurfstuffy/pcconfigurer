const express = require('express');
const { getPartImageByName } = require('../controllers/partsPriceController');

const router = express.Router();

router.post('/api/getpartspricebyname', getPartImageByName);

module.exports = router;