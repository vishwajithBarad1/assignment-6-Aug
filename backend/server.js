const {PORT} = require("./constants/constVar");
const todoController = require("./controllers/todoController")
const express = require("express");
const cors = require("cors")
const mongoose = require("./db/connectDb")
const app = express();

app.use(express.json());
app.use(cors())

app.get("/todos",todoController.getTodo);
app.post("/todos",todoController.createTodo);

app.listen(PORT,()=>{console.log("your server is listining on port",PORT)})