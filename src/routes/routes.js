const express = require('express');
const UserController = require("../app/controllers/api/UserController");

const routes = express.Router();

routes.get("/users/", UserController.index);
routes.get("user/:id", UserController.searchById);

module.exports = routes;