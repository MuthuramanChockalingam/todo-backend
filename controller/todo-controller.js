const todo = require("../models").Todo;
const Sequelize = require("sequelize")
var Op = Sequelize.Op;

exports.createTodo = async(req, res) => {
    const {text, isCompleted} = req.body;
    const result = await todo.create({
        text: text,
        isCompleted: isCompleted,
    });
    res.json({
        message: result ? "sucess" : "error"
    })
}

exports.listTodos = async(req, res) => {
    const result = await todo.findAll({});
    res.json(result)
}

exports.getTodo = async (req, res) => {
    const {task_id} = req.params;

    const result = await todo.findOne({
        where: {
            id: {
                [Op.eq]: todo_id
            }
        }
    });
    res.json(result)
}

exports.deleteTodo = async(req, res) => {
    const result = await todo.destroy({
        where: {
            id: {
                [Op.eq]: req.params.todo_id,
            }
        }
    });
    res.json(result ? {} : { message: "failed" })
}

exports.updateTodo = async(req, res) => {
    const result = await todo.update({
        text: req.body.text
    },
    {
        where: {
            id: {
                [Op.eq]: req.params.todo_id
            }
        }
    }
    );
    res.json(result ? result : {message:"failed"})
}