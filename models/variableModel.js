const pool = require('../config/database');


exports.getAllVariables = async () => {
  const result = await pool.query('SELECT * FROM variable');
  return result.rows;
};


exports.getVariableById = async (id) => {
    const result = await pool.query('SELECT * FROM variable WHERE variable_id = $1', [id]);
    return result.rows[0];
};


exports.createVariable = async (key,value,type,document_id) => {
    const result = await pool.query(
        'INSERT INTO variable (key, value, type,creation_date,document_id) VALUES ($1, $2, $3, NOW() , $4) RETURNING *',
        [key, value, type, document_id]
      );
      return result.rows[0];
};


exports.updateVariable= async (id,key,value,type,document_id) => {
  const result = await pool.query(
    'UPDATE variable SET key = $1, value = $2, type = $3, document_id = $4 WHERE variable_id = $5 RETURNING *',
    [key,value,type,document_id,id]
  );
  return result.rows[0];
};

exports.deleteVariable = async (id) => {
    const result = await pool.query('DELETE FROM variable WHERE variable_id = $1 RETURNING *', [id]);
    return result.rows[0];
};






