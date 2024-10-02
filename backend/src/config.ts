const dotenv = require('dotenv');

dotenv.config({ path: '../.env' });

export const { PORT = 3000 } = process.env;
export const { JWT_SECRET = 'JWT_SECRET' } = process.env;
export const { CORS_ORIGIN = 'https://places.ivanjsx.com' } = process.env;
export const { DB_ADDRESS = 'mongodb://localhost:27017/mestodb' } = process.env;
