import "dotenv/config";

export const env = {
    port: parseInt(process.env.APP_PORT) || 3000,
    databaseURI: process.env.APP_DATABASE_URI,
};
 