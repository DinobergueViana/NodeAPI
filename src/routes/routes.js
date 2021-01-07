const express = require('express');
const UserController = require("../app/controllers/api/UserController");
const authMiddleware = require("../app/middlewares/auth");

const routes = express.Router();

routes.post("/users/create", UserController.create);
routes.post("/users/authenticate", UserController.authenticate);

routes.use(authMiddleware)

routes.get("/users", UserController.index);
routes.get("/users/:id", UserController.searchById);

routes.put("/users/update/:id", UserController.update);
routes.delete("/users/delete/:id", UserController.delete);

routes.post("/users/check", UserController.check);

module.exports = routes;