import mongoose, { Mongoose } from "mongoose";

const categorySchema = new mongoose.Schema({
    name : {
        type : String, 
        default : ""
    }, 
    image : {
        type : String,
        default : ""
    }
},{
    timestamps : true
})

const CategoryModel = Mongoose.model("category",categorySchema)

export default CategoryModel