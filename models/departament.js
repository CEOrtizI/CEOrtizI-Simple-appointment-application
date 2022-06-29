var mongoose =require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/citas')
schema =mongoose.schema;
var department= new schema({
    departID: 	{type:Number},
    departName:	{type:String}
})
module.exports=mongoose.model('Departament',department)