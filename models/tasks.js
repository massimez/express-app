const mongoose = require('mongoose');

 const TaskSchema = new mongoose.Schema({
     name:{
         type:String,
         required:[true,'50000 Must provide name'],
         trim:true,
         maxlength: [32, 'name can not be more then 32 characters']
        },
     isCompleted:{
         type: Boolean,
         default: false
     }
 })
 module.exports = mongoose.model('Task',TaskSchema)