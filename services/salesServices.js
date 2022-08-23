const salesModel = require('../models/salesModel');
const productsModel = require('../models/productsModel');
const CustomError = require('../error/customError');

const salesService = {
  getAll: async () => {
    const salesAll = await salesModel.getAll();
    return salesAll;
  },
  getById: async (id) => {
    const salesProductId = await salesModel.getById(id);
    return salesProductId;
  },

  // addVendas: async (sale) => {
  //   // const check = true;
  //   const products = await productsModel.getAll();
  //   console.log(products, 'products');

  //   const ids = sale.every(({ productId }) => sale
  //   .find(({ id }) => id === productId));
  //   console.log(ids, 'retorno do find');

  //   if (!ids) throw new CustomError(404, 'Product not found');
  //   console.log(ids, 'retorno do find2');

  //   const saleId = await salesModel.addVendas(sale);
  //   console.log(saleId, 'saleId');

  //   return saleId;
    
  //   // const allProducts = await productsModel.getAll();
  //   // const ids = products.map((item) => item.id);
  //   // await Promise.all(sale.forEach(async (element) => {
  //   //   const verify = await productsModel.getById(element.productId);
  //   //   if (verify === undefined) throw new CustomError(404, 'Product not found');
  //   // // }));

  //   // const sales = sale.map((item) => item.productId);
  //   // sales.forEach((item) => {
  //   //   if (!ids.includes(item)) return null;
  //   // });
  // },
    
};

module.exports = salesService;
