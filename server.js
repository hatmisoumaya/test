const dotenv = require('dotenv');
const app = require('./app');

const env = process.env.NODE_ENV || 'localhost';
dotenv.config({ path: `./config/.env.${env}` });

const port = 3000;

console.log(`Starting server in ${env} mode...`);

app.listen(port, () => {
  console.log(`Server running on ${process.env.DB_HOST}:${port}`);
});
