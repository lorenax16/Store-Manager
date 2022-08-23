const express = require('express');
const validacoes = require('../middlewares/productsValidate');

const productsContoller = require('../controllers/productsController');
const salesController = require('../controllers/salesController');

const productRoute = express.Router();

productRoute.get('/', productsContoller.getAll);
productRoute.get('/:id', productsContoller.getById);
productRoute.put('/:id', validacoes, salesController.edit);
productRoute.post('/', validacoes, productsContoller.add);
// productRoute.delete('/:id', productsContoller.destroy);

module.exports = productRoute; 