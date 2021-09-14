const task = require("../models").Task;
const Sequelize = require("sequelize");
const {Op} = Sequelize;

exports.createTask = async (req, res) => {
    const {text, dueOn} = req.body;
    const result = await task.create({
        text: text,
        dueOn: dueOn,
    });
    res.json({
        message: result ? "succesfully created" : "failed"
    })
}

exports.listTasks = async (req, res) => {
    const result = await task.findAll({});
    res.json(result)
}

exports.getTask = async (req, res) => {
    const {task_id} = req.params;

    const result = await task.findOne({
        where: {
            id: {
                [Op.eq]: task_id
            }
        }
    });
    res.json(result)
}

exports.deleteTask = async (req, res) => {
    const result = await task.destroy({
        where: {
            id: {
                [Op.eq]: req.params.task_id
            }
        }
    });
    res.json(result ? {} : { message: "failed" })
}

exports.updateTask = async (req, res) => {
    const result = await task.update({
        text: req.body.text
    },
    {
        where: {
            id: {
                [Op.eq]: req.params.task_id
            }
        }
    });
    res.json(result ? result : {message:"failed"})
}