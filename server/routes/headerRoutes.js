const express = require('express');
const router = express.Router();
const db = require('../database');

router.get('/active-heading', (req, res) => {
    const query = 'SELECT headingText FROM headings WHERE id = 1';
    db.get(query, (err, row) => {
        if (err) {
            console.error('Error:', err.message);
            res.status(500).json({ message: 'Failed to retrieve heading' });
        } else if (row) {
            res.status(200).json({ heading: row.headingText });
        } else {
            res.status(404).json({ message: 'No heading found' });
        }
    });
});

router.post('/save-heading', (req, res) => {
    const { heading } = req.body;
    if (!heading || typeof heading !== 'string') {
        return res.status(400).json({ message: 'Heading text is required and must be a string.' });
    }

    const query = 'INSERT OR REPLACE INTO headings (id, headingText) VALUES (1, ?)';

    db.run(query, [heading], function(err) {
        if (err) {
            console.error('Error:', err.message);
            res.status(500).json({ message: 'Failed to save heading' });
        } else {
            res.status(200).json({ message: 'Heading saved successfully' });
        }
    });
});

module.exports = router;