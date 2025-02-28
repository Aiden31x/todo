const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://aryan31:Aryan%4031@todo.oem8m.mongodb.net/todo-base");

const ToDoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: {
        type: Boolean,
        default: false
    }
})

const todo = mongoose.model('todos', ToDoSchema);

module.exports = {
    todo
}