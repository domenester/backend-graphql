import dotenv from 'dotenv';
import server from './src/server/index';

// Load environment settings from .env file
dotenv.config({ path: `${__dirname}/.env` });

export default server();
