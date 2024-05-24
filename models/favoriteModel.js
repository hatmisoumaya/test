const pool = require('../config/database');

exports.getAllFavorites = async () => {
  const result = await pool.query('SELECT * FROM favorite');
  return result.rows;
};

exports.getFavoriteById = async (id) => {
  const result = await pool.query('SELECT * FROM favorite WHERE favorite_id = $1', [id]);
  return result.rows[0];
};

exports.createFavorite = async (document_id, user_id) => {
  const result = await pool.query(
    'INSERT INTO favorite (document_id, user_id) VALUES ($1, $2) RETURNING *',
    [document_id, user_id]
  );
  return result.rows[0];
};

exports.updateFavorite = async (id, document_id, user_id) => {
  const result = await pool.query(
    'UPDATE favorite SET document_id = $1, user_id = $2 WHERE favorite_id = $3 RETURNING *',
    [document_id, user_id, id]
  );
  return result.rows[0];
};

exports.deleteFavorite = async (id) => {
  const result = await pool.query('DELETE FROM favorite WHERE favorite_id = $1 RETURNING *', [id]);
  return result.rows[0];
};
