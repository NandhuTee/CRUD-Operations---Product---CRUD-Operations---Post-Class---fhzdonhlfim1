const express = require('express');
const app = express();
const productRouter = require('../controllers/productControllers'); // Ensure this exports `router`

// Middleware
app.use(express.json());

// Routes
app.use('/api', productRouter);

module.exports = app;
