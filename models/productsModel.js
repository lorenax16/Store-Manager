const connection = require('./connection');

const getAllFuctions = {
  getAll: async () => {
    const [products] = await connection.execute('SELECT * FROM StoreManager.products;');
    return products;
  },

  getById: async (id) => {
    const [[products]] = await connection.execute(`SELECT * FROM StoreManager.products
    WHERE id=? ORDER BY id;`, [id]);
    return products;
  },
};

module.exports = getAllFuctions;
