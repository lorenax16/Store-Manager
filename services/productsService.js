const productsModel = require('../models/productsModel');

const productsService = {
  getAll: async () => {
    const products = await productsModel.getAll();
    return products;
  },

  getById: async (id) => {
    const products = await productsModel.getById(id);
    return products;
  },

  add: async (name) => {
    const newProducts = await productsModel.add(name);
    return newProducts;
  },
};

module.exports = productsService;