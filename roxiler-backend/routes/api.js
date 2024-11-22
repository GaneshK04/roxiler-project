const express = require('express');
const axios = require('axios');
const Product = require('../models/Product');
const router = express.Router();

// Seed database with data from third-party API
router.get('/initialize-database', async (req, res) => {
    try {
        const response = await axios.get('https://s3.amazonaws.com/roxiler.com/product_transaction.json');
        await Product.insertMany(response.data);
        res.status(200).send('Database initialized with seed data');
    } catch (error) {
        res.status(500).send('Error initializing database: ' + error.message);
    }
});

module.exports = router;
