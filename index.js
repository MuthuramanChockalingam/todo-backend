const express = require("express");
const genRouter = require('./router/gen-router');

const app = express();
const PORT = 4000;

app.use(express.urlencoded());
app.use(express.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
['todo', 'task', 'user'].forEach((type) => app.use(`/${type}`, genRouter(type)));

app.listen(PORT, () => console.log(`server listening to ${PORT}`));
