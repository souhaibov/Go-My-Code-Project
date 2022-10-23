const mongoose= require('mongoose')
const UserSchema= new mongoose.Schema({

first_name:{type:String ,required:true},
last_name:{type:String ,required:true},
phone_number:{type:Number ,required:true},
email:{type:String ,required:true},
password:{type:String ,required:true},
Age:{type:Number },
Poster:{type:String },
Status:{type:String ,default:"user"},

})

module.exports=mongoose.model('User', UserSchema)