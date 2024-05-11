const express = require('express');
const {signUp, signIn} = require('../controllers/userController');

const router = express.Router();

router.post('/api/register', signUp);

router.post('/api/login', signIn);

module.exports = router;