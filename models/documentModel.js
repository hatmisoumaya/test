const pool = require('../config/database');


exports.getAllDocuments = async () => {
  const result = await pool.query('SELECT * FROM document');
  return result.rows;
};

exports.getDocumentById = async (id) => {
  const result = await pool.query('SELECT * FROM document WHERE document_id = $1', [id]);
  return result.rows[0];
};

exports.createDocument = async (name, content, screen_shot, category_id, user_id, document_state) => {
  const result = await pool.query(
    'INSERT INTO document (name, content, creation_date, screen_shot, category_id, user_id , document_state) VALUES ($1, $2, NOW(), $3, $4, $5, $6) RETURNING *',
    [name, content, screen_shot, category_id, user_id, document_state]
  );
  return result.rows[0];
};

exports.updateDocument = async (id,name, content, screen_shot, category_id, user_id, document_state) => {
  const result = await pool.query(
    'UPDATE document SET name = $1, content = $2, modificaton_date = NOW(), screen_shot = $3, category_id = $4, user_id = $5, document_state = $6 WHERE document_id = $7 RETURNING *',
    [name, content, screen_shot, category_id, user_id, document_state, id]
  );
  return result.rows[0];
};

exports.deleteDocument = async (id) => {
  const result = await pool.query('DELETE FROM document WHERE document_id = $1 RETURNING *', [id]);
  return result.rows[0];
};
