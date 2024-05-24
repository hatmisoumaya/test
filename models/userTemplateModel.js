const pool = require('../config/database');

exports.getAllUserTemplates = async () => {
  const result = await pool.query('SELECT * FROM user_template');
  return result.rows;
};

exports.getUserTemplateById = async (id) => {
  const result = await pool.query('SELECT * FROM user_template WHERE user_template_id = $1', [id]);
  return result.rows[0];
};

exports.createUserTemplate = async (name, description, content, screen_shot, category_id, user_id) => {
  const result = await pool.query(
    'INSERT INTO user_template (name, description, creation_date, modification_date, content, screen_shot, category_id, user_id) VALUES ($1, $2, NOW(), NOW(), $3, $4, $5, $6) RETURNING *',
    [name, description, content, screen_shot, category_id, user_id]
  );
  return result.rows[0];
};

exports.updateUserTemplate = async (id, name, description, content, screen_shot, category_id, user_id) => {
  const result = await pool.query(
    'UPDATE user_template SET name = $1, description = $2, modification_date = NOW(), content = $3, screen_shot = $4, category_id = $5, user_id = $6 WHERE user_template_id = $7 RETURNING *',
    [name, description, content, screen_shot, category_id, user_id, id]
  );
  return result.rows[0];
};

exports.deleteUserTemplate = async (id) => {
  const result = await pool.query('DELETE FROM user_template WHERE user_template_id = $1 RETURNING *', [id]);
  return result.rows[0];
};
