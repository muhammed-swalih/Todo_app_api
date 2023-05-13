import mongoose from "mongoose";
const {Schema} =  mongoose

const todoSchema = new Schema ( {
    todo : {
        type : String,
        require : true
    },
    place : {
        type : String,
        require : true
    },
    time : {
        type : String,
        require : true
    }
})

export default mongoose.model('todoModel' , todoSchema)