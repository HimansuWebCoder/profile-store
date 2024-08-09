const express = require('express');
const users = require("../controllers/users.controller");
const db = require("../models/db");
const usersRouter = express.Router();


usersRouter.get("/", (req, res) => { users.getUsers(req, res, db)});
usersRouter.delete("/:id", (req, res) => { users.deleteUser(req, res, db)});


module.exports = usersRouter;