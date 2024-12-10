const express = require('express');
const { createFictionBook } = require('../controllers/fictionController');
const router = express.Router();

router.post('/fiction', createFictionBook);

module.exports = router;
