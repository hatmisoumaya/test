
module.exports = (err, req, res, next) => {
  console.error(err.stack);

  if (err.code === '23505') {
  
    let message = 'Unique constraint violation';
    if (err.constraint === 'username') {
      message = 'This username already exists, try another one.';
    } else if (err.constraint === 'email') {
      message = 'This email already exists, try another one. ';
    }
    else if (err.constraint === 'phone_number') {
      message ='This phone number already exists, try another one. ';
    }
    else if (err.constraint === 'name') {
      message = 'This category already exists, try another one. ';
    }
    return res.status(400).json({ error: message });
  }

  res.status(500).json({ error: 'Internal server error' });
};
