import mongoose from "mongoose";

const  product= mongoose.model('Product',new mongoose.SchemaTypeOptions({
   name: {type: String, required: true}, 
   price:{type: String, },
   description:{type: String, required: true},
   stock:{type: Number},
   ratings:{type: Number},
   category:{type: mongoose.SchemaTypes.ObjectId,ref:'category' , required: false},
   image:{type: String}
}))

export default product