const routes = require("express").Router();

const StudentsController = require("./controllers/StudentsController");
const ClassroomsController = require("./controllers/ClassroomsController");
const WorksController = require("./controllers/WorksController");

// Student routes
routes.get("/student", StudentsController.index);
routes.post("/student", StudentsController.create);
routes.get("/student/:id", StudentsController.read);
routes.put("/student/:id", StudentsController.update);
routes.delete("/student/:id", StudentsController.delete);

// Classroom routes
routes.get("/classroom", ClassroomsController.index);
routes.post("/classroom", ClassroomsController.create);
routes.get("/classroom/:id", ClassroomsController.read);
routes.put("/classroom/:id", ClassroomsController.update);
routes.delete("/classroom/:id", ClassroomsController.delete);

// Work routes
routes.get("/work", WorksController.index);
routes.post("/work", WorksController.create);
routes.get("/work/:id", WorksController.read);
routes.put("/work/:id", WorksController.update);
routes.delete("/work/:id", WorksController.delete);

module.exports = routes;
