const connection = require('./connection');

const getAllFuctions = {
  getAll: async () => {
    const [products] = await connection.execute('SELECT * FROM StoreManager.products;');
    return products;
  },

  getById: async (id) => {
    const [[products]] = await connection.execute(`SELECT * FROM StoreManager.products
    WHERE id=? ;`, [id]);
    // console.log(products);
    return products;
  },

  add: async (name) => {
    const [result] = await connection
      .execute('INSERT INTO StoreManager.products(name) VALUES (?);', [name]);
    return { id: result.insertId, name };
  },

  edit: async ({ name, id }) => {
    const [result] = await connection.execute(
      'UPDATE StoreManager.products SET name = ? WHERE id = ?;',
      [name, id],
    );
    return result;
  },

  // destroy: async (id) => {
  //   connection.execute(`DELETE
  //    FROM StoreManager.products WHERE id = ?;`, [id]);
  // },
};

module.exports = getAllFuctions;