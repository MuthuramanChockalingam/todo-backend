const express = require("express");
const router = express.Router();
const taskControler = require("../controller/task-controller");

router.route("/").get(taskControler.list).post(taskControler.create);
router.route("/:id").get(taskControler.get).put(taskControler.update).delete(taskControler.delete);

module.exports = router;
