const express = require("express");
const router = express.Router();
const todoController = require("../controller/todo-controller");

router.route("/").get(todoController.allTodo).post(todoController.createTodo);
router.route("/:todo_id").put(todoController.updateTodo).delete(todoController.deletetodo);

module.exports = router;