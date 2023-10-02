import Mongoose from "mongoose";

const TaskSchema = new Mongoose.Schema({
    name:{
        type:String,
        required:[true,'must provide a name'],
        trim:true,
        maxlength:[20,'name cannot be more than 20 chars']
    },
    completed:{
        type:Boolean,
        default:false
    }
})

export default Mongoose.model('Task',TaskSchema)