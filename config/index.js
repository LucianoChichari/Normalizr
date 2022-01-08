const dotenv = require("dotenv");
dotenv.config();

let config = {
  port: process.env.PORT || "3000",
  cors: process.env.CORS || "*",
  node_env: process.env.NODE_ENV !== "production",
};

module.exports = { config };
