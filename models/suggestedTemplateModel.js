const pool = require('../config/database');

exports.getAllSuggestedTemplates = async () => {
  const result = await pool.query('SELECT * FROM suggested_template');
  return result.rows;
};

exports.getSuggestedTemplateById = async (id) => {
  const result = await pool.query('SELECT * FROM suggested_template WHERE suggested_template_id = $1', [id]);
  return result.rows[0];
};

exports.createSuggestedTemplate = async (name, content, description, screen_shot, category_id) => {
  const result = await pool.query(
    'INSERT INTO suggested_template (name, content, description, creation_date, modification_date, screen_shot, category_id) VALUES ($1, $2, $3, NOW(), NOW(), $4, $5) RETURNING *',
    [name, content, description, screen_shot, category_id]
  );
  return result.rows[0];
};

exports.updateSuggestedTemplate = async (id, name, content, description, screen_shot, category_id) => {
  const result = await pool.query(
    'UPDATE suggested_template SET name = $1, content = $2, description = $3, modification_date = NOW(), screen_shot = $4, category_id = $5 WHERE suggested_template_id = $6 RETURNING *',
    [name, content, description, screen_shot, category_id, id]
  );
  return result.rows[0];
};

exports.deleteSuggestedTemplate = async (id) => {
  const result = await pool.query('DELETE FROM suggested_template WHERE suggested_template_id = $1 RETURNING *', [id]);
  return result.rows[0];
};
