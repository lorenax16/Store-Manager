const express = require('express');

const productsContoller = require('../controllers/productsController');

const productRoute = express.Router();

productRoute.get('/', productsContoller.getAll);
productRoute.get('/:id', productsContoller.getById);

module.exports = productRoute;