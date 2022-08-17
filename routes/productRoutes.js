const express = require('express');

const productsContoller = require('../controllers/productsController');

const productRoute = express.Router();

productRoute.get('/', productsContoller.getAll);
productRoute.get('/:id', productsContoller.getById);
productRoute.post('/', productsContoller.add);

module.exports = productRoute;