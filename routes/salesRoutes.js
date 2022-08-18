const express = require('express');
const salesController = require('../controllers/salesController');

const salesProduct = express.Router();

salesProduct.get('/', salesController.getAll);
salesProduct.get('/:id', salesController.getById);
salesProduct.post('/', salesController.add);

module.exports = salesProduct;
