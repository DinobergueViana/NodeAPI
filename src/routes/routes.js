const express = require('express');
const UserController = require("../app/controllers/api/UserController");

const router = express.Router();

router.get("/users/", UserController.index);
router.get("user/:id", UserController.searchById);

module.exports = router;