const express = require('express');
const app = express();
const productRouter = require('./controllers/productControllers');
//const router = require('../controllers/productControllers');

//Router Middlewares
app.use(express.json());

app.use('/api', productRouter);

module.exports = app;
