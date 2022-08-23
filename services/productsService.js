const productsModel = require('../models/productsModel');

const productsService = {
  checkIfExists: async (id) => {
    const product = await productsModel.checkIfExists(id);
    if (!product) {
      const err = { status: 404, message: 'Product not found' };
      throw err;
    }
  },
  getAll: async () => {
    const products = await productsModel.getAll();
    return products;
  },

  getById: async (id) => {
    const products = await productsModel.getById(id);
    // console.log(products);
    return products;
  },

  add: async (name) => {
    const newProduct = await productsModel.add(name);
    return newProduct;
  },
  edit: async ({ id, name }) => {
    const resultado = await productsModel.edit({ id, name });
    if (resultado.affectedRows === 0) return false;
    return true;
  },

  // destoy: async (id) => {
  //   const result = await productsModel.getById(id);
  //   if (!result) return null;
  //   await productsModel.destoy(id);
  //   return { ...result };
  // },
};

module.exports = productsService; 