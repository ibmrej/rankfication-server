const express = require("express");
const routes = require("./app/routes");
const cors = require("cors");

class App {
  constructor() {
    this.express = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.express.use(express.json());
    this.express.use(express.urlencoded({ extended: false }));
    this.express.use(cors());
  }

  routes() {
    this.express.use(routes);
  }
}

module.exports = new App().express;
