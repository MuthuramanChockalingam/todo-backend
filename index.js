const express = require("express");
const genRouter = require('./router/gen-router');

const app = express();
const PORT = 4000;

app.use(express.urlencoded());
app.use(express.json());
['todo', 'task', 'user'].forEach((type) => app.use(`/${type}`, genRouter(type)));

app.listen(PORT, () => console.log(`server listening to ${PORT}`));
