const express = require('express');
const salesController = require('../controllers/salesController');
const { salesValite, validId } = require('../middlewares/saleValidate');

const salesRoute = express.Router();

salesRoute.get('/', salesController.getAll);
salesRoute.get('/:id', validId, salesController.getById);
salesRoute.post('/', salesValite, salesController.addVendas);
// salesRoute.put('/:id', salesController.update);
// salesRoute.delete('/:id', salesController.destroy);
module.exports = salesRoute;
