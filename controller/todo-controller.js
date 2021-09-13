const todo = require("../models").Todo;

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