const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth');

router.post('/address', authController.saveAddress)

module.exports = router;