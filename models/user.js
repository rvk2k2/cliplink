const mongoose =require("mongoose");
 
const userSchema = new mongoose.Schema({
    name : {type: String ,  require: true},
    email: {type: String , require: true , unique: true },
    password: {type: String , required : true},
},{timestamps: true})


const User = mongoose.model("user", userSchema);

module.exports = User;
