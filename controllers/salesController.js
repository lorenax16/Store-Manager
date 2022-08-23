const productsService = require('../services/productsService');
const salesService = require('../services/salesServices');

const salesController = {
  getAll: async (req, res) => {
    const { sales } = await salesService.getAll();
    return res.status(201).json({ sales });
  },
  getById: async (req, res) => {
    const { id } = req.params;
    const salesProduct = await salesService.getById(id);
    if (!salesProduct) return res.status(404).json({ message: 'Product not found' });
    return res.status(200).json(salesProduct);
  },
  // addVendas: async (req, res) => {
  //   const sales = req.body;
  //   console.log(sales, 'retorno do sale');
  //   const sale = await salesService.addVendas(sales);
  //   console.log(sale, 'controler');
  //   return res.status(201).json(sale);
  // },
  edit: async (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    try {
      const resultado = await productsService.edit({ id, name });
      if (!resultado) {
        return res.status(404).json({ message: 'Product not found' });
      }
      return res.status(200).json({ id: Number(id), name });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: 'error server' });
    }
  },

};

module.exports = salesController;