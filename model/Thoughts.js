const {Schema,type}=require('mongoose');
const reactionsSchema=require('./Reactions')
const thoughtSchema=new Schema(
    {
        thoughtText:{
            type:String
        },
        username:{
            type:String
        },

createdTime:{
    type:Date,
    default:Date.now(),
    get:(date)=>{
        return date.toLocalDateString()
    }
},
reactions:[reactionsSchema]
    },{
        toJSON:{
            virtuals:true,
            getters:true
        },
        id:false
    }
);
thoughtSchema.virtual('ReactionsCount').get(function(){
    return reactions.length;
})
const Thoughts=model('thoughts',thoughtSchema);
module.exports=Thoughts