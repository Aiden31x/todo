//basic boilerplate
//with express.json() middleware

const { todo } = require("./db");
const { createTodo, updateTodo } = require("./types");


const cors = require("cors");
const express = require("express");
const app = express();

app.use(express.json()); //allows to parse a json body
app.use(cors());

app.post("/todo", async function (req, res) {

    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if (!parsedPayload.success) {
        res.status(411).json({
            msg: "You sent the wrong inputs",
        })
        return;
    }

    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    })
    res.json({
        msg: "todo created"
    })


})

app.get("/todos", async function (req, res) {
    const todos = await todo.find({});
    res.json({
        todos
    })

})

app.put("/completed", async function (req, res) {
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);
    if (!parsedPayload.success) {
        res.status(411).json({
            msg: "You sent the wrong inputs.",

        })
    }

    await todo.update({
        _id: req.body.id
    }, {
        completed: true
    })

    res.json({
        msg: "Todo mark as completed"
    })
}

)

app.listen(3000);

