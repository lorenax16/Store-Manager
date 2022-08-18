const productsModel = require('../models/productsModel');

const productsService = {
  getAll: async () => {
    const products = await productsModel.getAll();
    return products;
  },

  getById: async (id) => {
    const products = await productsModel.getById(id);
    console.log(products);
    return products;
  },

  add: async (name) => {
    const newProduct = await productsModel.add(name);
    return newProduct;
  },
};

module.exports = productsService; 