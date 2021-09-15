const express = require("express");
const genController = require('../controller/gen-controller');

const genRouter = (type) => {
    const router = express.Router();
    const controller = genController(type);

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
