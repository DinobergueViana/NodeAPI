const express = require('express');
const UserController = require("../app/controllers/api/UserController");

const routes = express.Router();

routes.get("/users", UserController.index);
routes.get("/users/:id", UserController.searchById);
routes.post("/users/create", UserController.create);
routes.put("/users/update/:id", UserController.update);
routes.delete("/users/delete/:id", UserController.delete);

module.exports = routes;