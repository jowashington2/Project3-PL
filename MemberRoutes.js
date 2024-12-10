const express = require('express');
const { createMember, listMembers } = require('../controllers/memberController');
const router = express.Router();

router.post('/members', createMember);
router.get('/members', listMembers);

module.exports = router;
