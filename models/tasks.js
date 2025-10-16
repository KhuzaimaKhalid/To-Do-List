const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
    name : {
        type : String,
        maxlength : [50, 'Name can not be more than 50 characters'],
        required : [true, 'Name is required']
    },
    completed : {
        type : Boolean,
        default : false
    }
    
});

module.exports = mongoose.model('Task', TaskSchema);