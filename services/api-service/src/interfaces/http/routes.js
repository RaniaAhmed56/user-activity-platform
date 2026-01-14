const express = require('express');
const { createActivity, getActivities, getActivityById, getHealth } = require('./controller');

const router = express.Router();

// Activity endpoints
router.post('/activities', createActivity);
router.get('/activities', getActivities);
router.get('/activities/:id', getActivityById);

// Health check
router.get('/health', getHealth);

module.exports = router;
