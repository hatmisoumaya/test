const pool = require('../config/database');

exports.getAllUsedTemplates = async () => {
  const result = await pool.query('SELECT * FROM used_template');
  return result.rows;
};

exports.getUsedTemplateById = async (id) => {
  const result = await pool.query('SELECT * FROM used_template WHERE used_template_id = $1', [id]);
  return result.rows[0];
};

exports.createUsedTemplate = async (user_id, suggested_template_id, document_id) => {
  const result = await pool.query(
    'INSERT INTO used_template (usage_date, user_id, suggested_template_id, document_id) VALUES (now(), $1, $2, $3) RETURNING *',
    [ user_id, suggested_template_id, document_id]
  );
  return result.rows[0];
};

exports.deleteUsedTemplate = async (id) => {
  const result = await pool.query('DELETE FROM used_template WHERE used_template_id = $1 RETURNING *', [id]);
  return result.rows[0];
};
