const express = require("express");
const router = express.Router();
const todoController = require("../controller/todo-controller");

router.route("/").get(todoController.listTodos).post(todoController.createTodo);
router.route("/:todo_id").get(todoController.getTodo).put(todoController.updateTodo).delete(todoController.deleteTodo);

module.exports = router;
