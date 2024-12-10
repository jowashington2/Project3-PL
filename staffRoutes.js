const express = require('express');
const { createStaff, listStaff } = require('../controllers/staffController');
const router = express.Router();

router.post('/staff', createStaff);
router.get('/staff', listStaff);

module.exports = router;
