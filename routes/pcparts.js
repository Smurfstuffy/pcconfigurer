const express = require('express');

const {getProcessors, updateCPUsWithImageUrls} = require('../controllers/processorController')
const { getGraphicalCards, updateGpuWithImageUrls } = require('../controllers/graphicalCardController');
const { getMotherBoards, updateMotherboardWithImageUrls } = require('../controllers/motherboardController');
const { getCases, updateCasesWithImageUrls } = require('../controllers/caseController');
const { getCpuCoolers, updateCpuCoolerWithImageUrls } = require('../controllers/cpuCoolerController');
const { getCaseFans, updateCaseFanWithImageUrls } = require('../controllers/caseFanController');
const { getStorages, updateStoragesWithImageUrls } = require('../controllers/storageController');
const { getMemories, updateMemoryWithImageUrls } = require('../controllers/memoryController');
const { getPowerSupplies, updatePowerSupplyWithImageUrls } = require('../controllers/powerSupplyController');

const router = express.Router();

router.post('/api/processors', getProcessors);
router.post('/api/updateprocessors', updateCPUsWithImageUrls);

router.post('/api/graphicalcards', getGraphicalCards);
router.post('/api/updategraphicalcards', updateGpuWithImageUrls);

router.post('/api/motherboards', getMotherBoards);
router.post('/api/updatemotherboards', updateMotherboardWithImageUrls);

router.post('/api/cases', getCases);
router.post('/api/updatecases', updateCasesWithImageUrls);

router.post('/api/cpucoolers', getCpuCoolers);
router.post('/api/updatecpucoolers', updateCpuCoolerWithImageUrls);

router.post('/api/casefans', getCaseFans);
router.post('/api/updatecasefans', updateCaseFanWithImageUrls);

router.post('/api/storages', getStorages);
router.post('/api/updatestorages', updateStoragesWithImageUrls);

router.post('/api/memories', getMemories);
router.post('/api/updatememories', updateMemoryWithImageUrls);

router.post('/api/powersupplies', getPowerSupplies);
router.post('/api/updatepowersupplies', updatePowerSupplyWithImageUrls);

module.exports = router;