var mongoose =require('mongoose');
const {Schema}=mongoose
var department= new Schema({
    departID: 	{type:Number},
    departName:	{type:String},
    doctor:{type:Schema.Types.ObjectId,ref:'Doctor'}
})
module.exports=mongoose.model('Department',department)