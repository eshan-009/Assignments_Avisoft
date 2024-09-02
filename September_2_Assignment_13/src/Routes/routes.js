const express = require("express");
const router = express.Router();
const PostTodo = require('../Controllers/PostTodo');
const getTodo = require("../Controllers/getTodo");
const DeleteTodo = require("../Controllers/DeleteTodo");
const PutTodo = require("../Controllers/PutTodo")
router.get("/GET/tasks/:id?",getTodo);
router.post("/POST/tasks",PostTodo);
router.put("/PUT/tasks/:id",PutTodo);
router.delete("/DELETE/tasks/:id",DeleteTodo);

module.exports = router;