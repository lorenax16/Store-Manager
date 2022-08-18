const connection = require('./connection');

const salesModelF = {
  getAll: async () => {
    const [sales] = await connection
      .execute(`SELECT sales_products.sale_id AS saleId,
    sales_products.product_id AS productId,
    sales_products.quantity AS quantity,
    sales.date AS date
    FROM StoreManager.sales AS sales 
    INNER JOIN StoreManager.sales_products AS sales_products
    ON sales.id = sales_products.sale_id
    ORDER BY sale_id;`);
    return sales;
  },

  getById: async (id) => {
    const [salesProduct] = await connection
      .execute('SELECT * FROM StoreManager.sales WHERE id = ?;', [id]);
    return salesProduct;
  },

  add: async () => {
  
  },
};

module.exports = salesModelF;