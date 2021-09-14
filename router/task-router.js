const express = require("express");
const router = express.Router();
const taskControler = require("../controller/task-controller");

router.route("/").get(taskControler.getTask).post(taskControler.createTask);
router.route("/:task_id").put(taskControler.updateTask).delete(taskControler.removeTask);

module.exports = router;
