//tells the types we expect from user
const zod = require("zod");

const createTodo = zod.object({    //a zod object which tell what create todo will contain
    title: zod.string(),
    description: zod.string(),

})

const updateTodo = zod.object({   //a zod object which tells what the object would store
    id: zod.string(),

})

module.exports = {
    createTodo: createTodo,
    updateTodo: updateTodo
}