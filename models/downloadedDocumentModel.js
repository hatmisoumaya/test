const pool = require('../config/database');

exports.getAllDownloadedDocuments = async () => {
  const result = await pool.query('SELECT * FROM downloaded_document');
  return result.rows;
};

exports.getDownloadedDocumentById = async (id) => {
  const result = await pool.query('SELECT * FROM downloaded_document WHERE download_id = $1', [id]);
  return result.rows[0];
};

exports.createDownloadedDocument = async (name, user_id, document_id, category_id) => {
  const result = await pool.query(
    'INSERT INTO downloaded_document (name, user_id, document_id, download_date, category_id) VALUES ($1, $2, $3, now(), $4) RETURNING *',
    [name, user_id, document_id, category_id]
  );
  return result.rows[0];
};

exports.deleteDownloadedDocument = async (id) => {
  const result = await pool.query('DELETE FROM downloaded_document WHERE download_id = $1 RETURNING *', [id]);
  return result.rows[0];
};
