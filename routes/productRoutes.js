const express = require('express');
const validacoes = require('../middlewares/validacoes');

const productsContoller = require('../controllers/productsController');

const productRoute = express.Router();

productRoute.get('/', productsContoller.getAll);
productRoute.get('/:id', productsContoller.getById);
productRoute.post('/', validacoes, productsContoller.add);

module.exports = productRoute; 