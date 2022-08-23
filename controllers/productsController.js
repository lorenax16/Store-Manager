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
    return res.status(201).json(newProduct);
  },
  edit: async (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
  
    const resultado = await productsService.edit({ id, name });
    if (!resultado) return res.status(404).json({ message: 'Product not found' });
    return res.status(200).json({ id: Number(id), name });
  },
  
  destroy: async (req, res) => {
    const { id } = req.params;
    const result = await productsService.destroy(id);
    if (!result) return res.status(404).json({ message: 'Product not found' });
    return res.status(204).json();
  },
};

module.exports = productsContoller; 