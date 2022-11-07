const mongoose= require('mongoose')
const ActivitySchema= new mongoose.Schema({

NumberOfStudents:{type:Number ,required:true},
tof:[{url:String}],
place:{type:String ,required:true},
classDate:{type:String},
})

module.exports=mongoose.model('Activities', ActivitySchema)