const pool = require('../config/database');


exports.getAllCategories = async () => {
  const result = await pool.query('SELECT * FROM category');
  return result.rows;
};


exports.getCategoryById = async (id) => {
  const result = await pool.query('SELECT * FROM category WHERE category_id = $1', [id]);
  return result.rows[0];
};


exports.createCategory = async (name) => {
  const result = await pool.query(
    'INSERT INTO category (name, creation_date) VALUES ($1, NOW()) RETURNING *',
    [name]
  );
  return result.rows[0];
};


exports.updateCategory = async (id, name) => {
  const result = await pool.query(
    'UPDATE category SET name = $1 WHERE category_id = $2 RETURNING *',
    [name, id]
  );
  return result.rows[0];
};


exports.deleteCategory = async (id) => {
  const result = await pool.query('DELETE FROM category WHERE category_id = $1 RETURNING *', [id]);
  return result.rows[0];
};
