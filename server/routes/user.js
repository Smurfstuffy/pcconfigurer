const express = require('express');
const {signUp, signIn, verifyToken} = require('../controllers/userController');
const router = express.Router();

router.post('/api/register', signUp);

router.post('/api/login', signIn);

router.post('/api/verifytoken', verifyToken);

module.exports = router;