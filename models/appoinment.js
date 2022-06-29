var mongoose =require('mongoose');
schema =mongoose.schema;
var appointment= new schema({
    appID: 	{type:String},
    appID:	{type:String},
    patientID: 	{type:String},
    date:	{type:Date},
    time:	{type:Date}
})
module.exports=mongoose.model('Doctor',Doctor)