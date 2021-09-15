const express = require("express");

const controllers = {
    todo: require("../controller/todo-controller"),
    task: require("../controller/task-controller"),
};

const genRouter = (type) => {
    const router = express.Router();
    const controller = controllers[type];

    router.route("/")
        .get(controller.list)
        .post(controller.create);
    router.route("/:id")
        .get(controller.get)
        .put(controller.update)
        .delete(controller.delete);

    return router;
};

module.exports = genRouter;
