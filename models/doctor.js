var mongoose =require('mongoose');
schema =mongoose.schema;
var Doctor= new schema({
    doctorID: 	{type:String},
    deptDoc:	{type:Number}
})
module.exports=mongoose.model('Doctor',Doctor)