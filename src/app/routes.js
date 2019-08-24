const routes = require("express").Router();
const IndexController = require("./controllers/IndexController");

routes.get("/", IndexController.index);

module.exports = routes;
