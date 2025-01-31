const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'must provide name'],
        trim: true,
        maxlength: [20, 'name cannot be more than 20 characters']
    },
    completed: {
        type: Boolean,
        default: false
    }
})

// create the Task model
const Task = mongoose.model('Task', TaskSchema)

module.exports = Task