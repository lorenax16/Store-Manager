const salesModel = require('../models/salesModel');
// const productsModel = require('../models/productsModel');

const salesProductFu = {
  getAll: async () => {
    const sales = await salesModel.getAll();
    return sales;
  },
  getById: async (id) => {
    const salesProduct = await salesModel.getById(id);
    return salesProduct;
  },

  add: async () => {
    
  },
    
};

module.exports = salesProductFu;
