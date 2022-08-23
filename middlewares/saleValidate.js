// const salesService = require('../services/salesServices');

const salesValite = (req, res, next) => {
  const sale = req.body;
  if (sale.some(({ quantity }) => quantity <= 0)) {
    return res.status(422).json({ message: '"quantity" must be greater than or equal to 1' });
  }
  if (sale.every(({ quantity }) => !quantity)) {
    return res.status(400).json({ message: '"quantity" is required' });
  }
  if (!sale.every(({ productId }) => productId)) {
    return res.status(400).json({ message: '"productId" is required' });
  }
  // if (!saleList.some(({ productId }) => productId)) {
  //   return res.status(400).json({ message: '"productId" is required' });
  // }

  // if (saleList.every(({ quantity }) => !quantity && quantity !== 0)) {
  //   return res.status(400).json({ message: '"quantity" is required' });
  // }
  // if (!sale.every(({ productId }) => productId)) {
  //   return res.status(404).json({ message: 'Product not found' });
  // }
  next();
};

module.exports = salesValite;