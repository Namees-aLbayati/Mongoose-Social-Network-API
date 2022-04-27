const {Schema,model}=require('mongoose');

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
        return new Date(date);

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
    return this.reactions.length;
})
const Thoughts=model('thought',thoughtSchema);
module.exports=Thoughts