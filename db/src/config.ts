export const name = "@lnk/db";
export const port = process.env.PORT || 4000;
export const jwtSecret = "lnkbeer";
export const clientUrl = process.env.API_CLIENT_URL || "";
export const serverUrl =
  process.env.API_SERVER_URL || `http://127.0.0.1:${process.env.PORT || 4000}`;
export const databaseUrl =
  process.env.DATABASE_URL || "mongodb://127.0.0.1:27017/lnk";
export const testDatabaseUrl =
  process.env.TEST_DATABASE_URL || "mongodb://127.0.0.1:27017/lnk-test";
export default {
  name,
  // Node.js app
  port,

  // API Gateway
  api: {
    // API URL to be used in the client-side code
    clientUrl,
    // API URL to be used in the server-side code
    serverUrl,
  },

  jwtSecret,
  // Database
  databaseUrl,
  testDatabaseUrl,
};
