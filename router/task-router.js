const express = require("express");
const router = express.Router();
const taskControler = require("../controller/task-controller");

router.route("/").get(taskControler.listTasks).post(taskControler.createTask);
router.route("/:task_id").get(taskControler.getTask).put(taskControler.updateTask).delete(taskControler.deleteTask);

module.exports = router;
