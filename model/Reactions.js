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
        return new Date(date);
 

       }
   }
},
{
    toJSON:{
        getters:true
    },
    id:false

}
);
module.exports=ReactionSchema