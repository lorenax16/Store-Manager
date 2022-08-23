const connection = require('./connection');

const salesModelF = {
  getAll: async () => {
    const [sales] = await connection
      .execute('SELECT * FROM StoreManager.sales_products ORDER BY sale_id ASC, product_id ASC');
    return sales;
  },

  getById: async (id) => {
    const [sales] = await connection
      .execute('SELECT * FROM StoreManager.sales_products WHERE sale_id = ?;', [id]);
    return sales;
  },

  addVendas: async (sales) => {
    const [id] = await connection.execute(`INSERT INTO
    StoreManager.sales (id) VALUES (default)`);

      await sales.forEach(async (item) => {
        await connection.execute(`INSERT INTO StoreManager.sales_products
        (sale_id, product_id, quantity)
        VALUES (?, ?, ?);`, [id.insertId, item.productId, item.quantity]);
      });
    return { id: id.insertId, itemsSold: sales };
  },

  // update: async (id, sale) => {
  //   const sales = await connection.execute(`UPDATE StoreManager.sales_products SET quantity = ?
  //   WHERE sale_id = ? AND prodcuct_id = ? `, [sale.quantity, id, sale.productId]);
  //   return sales;
  // },

  // destroy: async (id) => {
  //   const [result] = await connection.execute(`DELETE
  //   FROM StorageManager.sales WHERE id = ? ; `, [id]);
  //   return result;
  // },
};

module.exports = salesModelF;