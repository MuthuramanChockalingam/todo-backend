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

exports.allTodo = async(req, res) => {
    const todos = await todo.findAll({});
    res.json({
        todos: todos
    })
}

exports.deletetodo = async(req, res) => {
    const result = await todo.destroy({
        where: {
            id: {
                [Op.eq]: req.params.todo_id,
            }
        }
    });
    res.json({
        message: result ? "success" : "ID does not exists"
    })
}
