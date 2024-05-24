const pool = require('../config/database');


exports.getAllUsers = async () => {
  const result = await pool.query('SELECT * FROM user_account');
  return result.rows;
};


exports.getUserById = async (id) => {
  const result = await pool.query('SELECT * FROM user_account WHERE user_id = $1', [id]);
  return result.rows[0];
};


exports.createUser = async (username, email, password, phone_number, address) => {
  const result = await pool.query(
    'INSERT INTO user_account (username, email, password, phone_number, address, creation_date) VALUES ($1, $2, $3, $4, $5, NOW()) RETURNING *',
    [username, email, password, phone_number, address]
  );
  return result.rows[0];
};


exports.updateUser = async (id, username, email, password, phone_number, address) => {
  const result = await pool.query(
    'UPDATE user_account SET username = $1, email = $2, password = $3, phone_number = $4, address = $5 WHERE user_id = $6 RETURNING *',
    [username, email, password, phone_number, address, id]
  );
  return result.rows[0];
};


exports.deleteUser = async (id) => {
  const result = await pool.query('DELETE FROM user_account WHERE user_id = $1 RETURNING *', [id]);
  return result.rows[0];
};
