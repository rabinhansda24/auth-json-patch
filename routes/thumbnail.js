const express = require('express');
const router = express.Router();

const thumbnailController = require('../controllers/thumbnail');

router.post('/generate', thumbnailController.generateThumbnail)

module.exports = router