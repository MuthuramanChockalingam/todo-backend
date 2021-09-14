const express = require("express");
const TodoRouter = require("./router/todo-router");
const TaskRouter = require("./router/task-router");

const app = express();
const PORT = 4000;

app.use(express.urlencoded());
app.use(express.json());
app.use("/todo", TodoRouter);
app.use("/task", TaskRouter);

app.listen(PORT, () => console.log(`server listening to ${PORT}`));
