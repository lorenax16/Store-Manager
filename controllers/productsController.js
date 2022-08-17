const productsService = require('../services/productsService');

const ERROR_MESSAGE = 'Server error';

const productsContoller = {
  getAll: async (req, res) => {
    try {
      const products = await productsService.getAll();
      console.log(products);
      return res.status(200).json(products);
    } catch (error) {
      return res.status(500).json({ message: ERROR_MESSAGE });
    }
  },

  getById: async (req, res) => {
    try {
      const { id } = req.params;
      const products = await productsService.getById(id);
      if (!products) return res.status(404).json({ message: 'Product not found' });
      res.status(200).json(products);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: ERROR_MESSAGE });
    }
  },
  add: async (req, res) => {
    const { name } = req.body;
    try {
      const newProduct = await productsService.add(name);
      console.log(newProduct);
      return res.status(201).json({ id: newProduct.insertId, name });
    } catch (error) {
      return res.status(500).json({ message: ERROR_MESSAGE });
    }
  },
};

module.exports = productsContoller;