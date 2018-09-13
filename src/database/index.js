import mongoose from 'mongoose';

import { logger } from '../logger';

export default env => new Promise((resolve, reject) => {
  logger.info(`[DATABASE] Starting Mongoose DB at: ${env.DATABASE_SERVER}`);

  mongoose.connect(env.DATABASE_MAIN_URL, (err) => {
    if (err || !mongoose.connection.readyState) {
      reject(err);
      logger.error(err.message || err || 'Failed to connect to database.');
    } else {
      resolve();
      logger.info('[DATABASE] DB Started SUCCESSFULLY');
    }
  });
});
