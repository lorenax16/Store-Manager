const productsService = require('../services/productsService');

const productsContoller = {
  getAll: async (req, res) => {
      const products = await productsService.getAll();
      return res.status(200).json(products);
  },

  getById: async (req, res) => {
    const { id } = req.params;
    const products = await productsService.getById(id);
    if (!products) return res.status(404).json({ message: 'Product not found' });
    return res.status(200).json(products);
  },
  
  add: async (req, res) => {
    const { name } = req.body;
    const newProduct = await productsService.add(name);
    console.log(newProduct);
    return res.status(201).json(newProduct);
  },
};

module.exports = productsContoller; 