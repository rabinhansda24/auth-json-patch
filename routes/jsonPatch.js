const express = require('express');
const router = express.Router();

const jsonpatchController = require('../controllers/json_patch');

router.post('/', jsonpatchController.patch)

module.exports = router