// filepath: /backend/routes/callbackRequests.js
const express = require('express');
const router = express.Router();
const CallbackRequest = require('../models/CallbackRequest');

// POST request to save callback request
router.post('/', async (req, res) => {
  const { name, phone } = req.body;

  try {
    const newRequest = new CallbackRequest({ name, phone });
    await newRequest.save();
    res.status(201).json(newRequest);
  } catch (error) {
    res.status(500).json({ error: 'Failed to save request' });
  }
});

module.exports = router;