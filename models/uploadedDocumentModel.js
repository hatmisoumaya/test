const pool = require('../config/database');

exports.getAllUploadedDocuments = async () => {
  const result = await pool.query('SELECT * FROM uploaded_document');
  return result.rows;
};

exports.getUploadedDocumentById = async (id) => {
  const result = await pool.query('SELECT * FROM uploaded_document WHERE upload_id = $1', [id]);
  return result.rows[0];
};

exports.createUploadedDocument = async (user_id, document_id, name, file_size, file_type, upload_date) => {
  const result = await pool.query(
    'INSERT INTO uploaded_document (user_id, document_id, name, file_size, file_type, upload_date) VALUES ($1, $2, $3, $4, $5, now()) RETURNING *',
    [user_id, document_id, name, file_size, file_type]
  );
  return result.rows[0];
};

exports.deleteUploadedDocument = async (id) => {
  const result = await pool.query('DELETE FROM uploaded_document WHERE upload_id = $1 RETURNING *', [id]);
  return result.rows[0];
};
