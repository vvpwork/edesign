const express = require("express");

const app = express();
const router = express.Router();

module.exports = {
  port: 8080,
  app,
  router,
  express
};
