const express = require('express');
const { createNonFictionBook, listNonFictionBooks } = require('../controllers/nonFictionController');
const router = express.Router();

router.post('/non-fiction', createNonFictionBook);
router.get('/non-fiction', listNonFictionBooks);

module.exports = router;
