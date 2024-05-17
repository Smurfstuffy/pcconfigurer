const express = require('express');

const { getProcessors } = require('../controllers/processorController');
const { getGraphicalCards } = require('../controllers/graphicalCardController');
const { getMotherBoards } = require('../controllers/motherboardController');
const { getCases } = require('../controllers/caseController');
const { getCpuCoolers } = require('../controllers/cpuCoolerController');
const { getCaseFans } = require('../controllers/caseFanController');
const { getStorages } = require('../controllers/storageController');
const { getMemories } = require('../controllers/memoryController');
const { getPowerSupplies } = require('../controllers/powerSupplyController');

const router = express.Router();

router.post('/api/processors', getProcessors);

router.post('/api/graphicalcards', getGraphicalCards);

router.post('/api/motherboards', getMotherBoards);

router.post('/api/cases', getCases);

router.post('/api/cpucoolers', getCpuCoolers);

router.post('/api/casefans', getCaseFans);

router.post('/api/storages', getStorages);

router.post('/api/memories', getMemories);

router.post('/api/powersupplies', getPowerSupplies);

module.exports = router;