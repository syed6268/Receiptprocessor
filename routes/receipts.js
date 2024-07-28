const express = require('express');
const router = express.Router();
const { processReceipt, getReceiptPoints } = require('../services/receiptService');

router.post('/process', (req, res) => {
    try {
        const receipt = req.body;
        const result = processReceipt(receipt);
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get('/:id/points', (req, res) => {
    try {
        const id = req.params.id;
        const result = getReceiptPoints(id);
        res.json(result);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
});

module.exports = router;
