var mongoose =require('mongoose');
    
const {Schema}=mongoose
var schedule= new Schema({
    scheID: 	{type:Number},
    scheduleDay: {type:Date},
    doctorID:{type:Schema.Types.ObjectId,ref:'Doctor'},
})
module.exports=mongoose.model('Schedule',schedule)