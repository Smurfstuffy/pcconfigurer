const express = require('express');

const { getProcessors } = require('../controllers/processorController');
const { getGraphicalCards } = require('../controllers/graphicalCardController');
const { getMotherBoards } = require('../controllers/motherboardController');
const { getCases } = require('../controllers/caseController');
const { getCpuCoolers } = require('../controllers/cpuCoolerController');
const { getCaseFans } = require('../controllers/caseFanController')

const router = express.Router();

router.post('/api/processors', getProcessors);

router.post('/api/graphicalcards', getGraphicalCards);

router.post('/api/motherboards', getMotherBoards);

router.post('/api/cases', getCases);

router.post('/api/cpucoolers', getCpuCoolers);

router.post('/api/casefans', getCaseFans);

module.exports = router;