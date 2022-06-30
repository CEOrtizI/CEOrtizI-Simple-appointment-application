var mongoose =require('mongoose');
schema =mongoose.schema;
var appointment= new schema({
    appID: 	{type:String},
    date:	{type:Date},
    status:	{type:Boolean},
    doctorID:	{type:Schema.Types.ObjectId, ref:'Doctor'},
    patientID: 	{type:Schema.Types.ObjectId, ref:'patient'},
  
})
module.exports=mongoose.model('Doctor',Doctor)