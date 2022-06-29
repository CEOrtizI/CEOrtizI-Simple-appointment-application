var mongoose =require('mongoose');
const {Schema}=mongoose
var Doctor= new Schema({
    doctorID: 	{type:String},
    Name:{type:String,require:true},
    LastName:{type:String,require:true},
    schedule:[{
        type:Schema.Types.ObjectId,
        ref:'Schedule'
    }],
    dept:{type:Schema.Types.ObjectId, ref:'Department'}
})
module.exports=mongoose.model('Doctor',Doctor)