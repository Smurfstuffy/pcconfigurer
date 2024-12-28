const express = require('express');
const requireAuth = require('../middleware/requireAuth');

const {getProcessors, updateCPUsWithImageUrls, getProcessorById, searchProcessors} = require('../controllers/processorController')
const { getGraphicalCards, updateGpuWithImageUrls, getGraphicalCardById, searchGraphicalCards } = require('../controllers/graphicalCardController');
const { getMotherBoards, updateMotherboardWithImageUrls, getMotherboardById, searchMotherBoards } = require('../controllers/motherboardController');
const { getCases, updateCasesWithImageUrls, getCaseById, searchCases } = require('../controllers/caseController');
const { getCpuCoolers, updateCpuCoolerWithImageUrls, getCpuCoolerById, searchCPUCoolers } = require('../controllers/cpuCoolerController');
const { getCaseFans, updateCaseFanWithImageUrls, getCaseFanById, searchFans } = require('../controllers/caseFanController');
const { getStorages, getStorageById, updateStoragesWithImageUrls, searchStorages } = require('../controllers/storageController');
const { getMemories, updateMemoryWithImageUrls, getMemoryById, searchMemories } = require('../controllers/memoryController');
const { getPowerSupplies, updatePowerSupplyWithImageUrls, getPowerSupplyById, searchPowerSupplies } = require('../controllers/powerSupplyController');

const {createPCBuild, getAllPCBuilds, getPCBuildById, scorePCBuild} = require('../controllers/pcBuildController');

const router = express.Router();

router.use(requireAuth);

router.post('/api/processors', getProcessors);
router.post('/api/processor', getProcessorById);
router.post('/api/updateprocessors', updateCPUsWithImageUrls);
router.post('/api/searchprocessors', searchProcessors);

router.post('/api/graphicalcards', getGraphicalCards);
router.post('/api/graphicalcard', getGraphicalCardById);
router.post('/api/updategraphicalcards', updateGpuWithImageUrls);
router.post('/api/searchgraphicalcards', searchGraphicalCards);

router.post('/api/motherboards', getMotherBoards);
router.post('/api/motherboard', getMotherboardById);
router.post('/api/updatemotherboards', updateMotherboardWithImageUrls);
router.post('/api/searchmotherboards', searchMotherBoards);

router.post('/api/cases', getCases);
router.post('/api/case', getCaseById);
router.post('/api/updatecases', updateCasesWithImageUrls);
router.post('/api/searchcases', searchCases);

router.post('/api/cpucoolers', getCpuCoolers);
router.post('/api/cpucooler', getCpuCoolerById);
router.post('/api/updatecpucoolers', updateCpuCoolerWithImageUrls);
router.post('/api/searchcpucoolers', searchCPUCoolers);

router.post('/api/casefans', getCaseFans);
router.post('/api/casefan', getCaseFanById);
router.post('/api/updatecasefans', updateCaseFanWithImageUrls);
router.post('/api/searchcasefans', searchFans);

router.post('/api/storages', getStorages);
router.post('/api/storage', getStorageById);
router.post('/api/updatestorages', updateStoragesWithImageUrls);
router.post('/api/searchstorages', searchStorages);

router.post('/api/memories', getMemories);
router.post('/api/memory', getMemoryById);
router.post('/api/updatememories', updateMemoryWithImageUrls);
router.post('/api/searchmemories', searchMemories);

router.post('/api/powersupplies', getPowerSupplies);
router.post('/api/powersupply', getPowerSupplyById);
router.post('/api/updatepowersupplies', updatePowerSupplyWithImageUrls);
router.post('/api/searchpowersupplies', searchPowerSupplies);

router.post('/api/createpcbuild', createPCBuild);
router.get('/api/getallpcbuilds', getAllPCBuilds);
router.post('/api/getpcbuildbyid', getPCBuildById);
router.post('/api/scorepcbuild', scorePCBuild);

module.exports = router;