const express = require('express');
const meeting = require('./meeting');

const router = express.Router();
router.post('/add', meeting.addMeeting);
router.get('/view', meeting.view);



module.exports = router;