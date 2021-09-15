const express = require("express");
const router = express.Router();
const todoController = require("../controller/todo-controller");

router.route("/").get(todoController.list).post(todoController.create);
router.route("/:id").get(todoController.get).put(todoController.update).delete(todoController.delete);

module.exports = router;
