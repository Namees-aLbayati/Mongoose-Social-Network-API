const {Schema,model}=require('mongoose');
const ReactionSchema=new Schema({
   reactionBody:{
       type:String
   } ,
   username:{
       type:String,
       required:true
   },
   createdAt:{
       type:Date,
       default:Date.now(),
       get:(date)=>{
           return date.toLocalDateString()

       }
   }
},
{
    toJSON:{
        getters:true
    }
}
);
module.exports=ReactionSchema