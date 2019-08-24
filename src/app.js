const express = require("express");
const routes = require("./app/routes");

class App {
  constructor() {
    this.express = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.express.use(express.json());
    this.express.use(express.urlencoded({ extended: false }));
    this.express.use((req, res, next) => {
      res.header("Access-Control-Allow-Origin", "*");
      res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Content-Disposition, Accept"
      );
      res.header(
        "Access-Control-Allow-Methods",
        "POST, GET, PUT, DELETE, OPTIONS"
      );
      next();
    });
  }

  routes() {
    this.express.use(routes);
  }
}

module.exports = new App().express;
