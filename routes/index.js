const { Router } = require("express");
const router = Router();
const messageHandler = require("../components/handlers/messageHandlers");

module.exports = (app) => {
  app.use("/normalizr", router);

  router.get("/", messageHandler.getMessagesForm);
};
