const {User,Thoughts}=require('../model');
module.exports={
    createUser(req,res){
        console.log('recived post user')
User.create(req.body).then((user)=>{
    User.findOneAndUpdate(
        {_id:user._id},
        {$set:{friends:req.body.friendID}},
        {runValidators:true,new:true}
    ).then((friend)=>res.json(friend))

    })

    },
addThoughts(req,res){
    console.log('recived post thoughts')
    Thoughts.create(req.body)
    .then((result)=>{
        // res.json(result)
        User.findOneAndUpdate(
            {_id:req.body.userID},
            { $addToSet: { thoughts: result._id } },
            { runValidators: true, new: true }
        ).then((data)=>{
           res.json(data)
        })
    });


},

addReactions(req,res){
        Thoughts.findOneAndUpdate(
{_id:req.body.thoughtID},
{$addToSet:{reactions:req.body}},
{runValidators:true,new:true})
.then((result)=>res.json(result))




},
findallUser(req,res){
    User.find({}).populate('thoughts').populate('friends')
.then((result)=>res.send(result))

},

findthoughts(req,res){
    Thoughts.find({}).then((result)=>res.json(result))
},

updateUser(req,res){
    User.findOneAndUpdate(
        {_id:req.params.id},
        {$set:req.body},
        // {$addToSet:{friends:req.body.friendID}},
        {runValidators:true,new:true}


    ).then((user)=>{


        if(req.body.friendID)
        {
        User.findOneAndUpdate(
            {_id:user._id},
            {$addToSet:{friends:req.body.friendID}},
            {runValidators:true,new:true}
        ).then((friend)=>console.log('added friend data',friend))
       
        
      
        }
        if(req.body.thoughtID){

            User.findOneAndUpdate(
                {_id:user._id},
                {$addToSet:{thoughts:req.body.thoughtID}},
               {runValidators:true,new:true}
            ).then((thoughtsData)=>res.json(thoughtsData))
            }})},


deleteUser(req,res){
    User.deleteOne(
        {_id:req.params.id}
    ).then((data)=>{
        if(data){
            res.json({message:"user Deleted Sucessfully"})

        }else{
                    res.json({message:"user NOT Found"})

        }
})},
removeThoughtsandFriends(req,res){
    User.findOneAndUpdate(
        {_id:req.params.id},
        {$pull:{thoughts:req.body.thoughtID}},
        {runValidators:true,new:true}

    ).then((data)=>{
        if(req.body.friendID){
User.findOneAndUpdate(
    {_id:req.params.id},
    {$pull:{friends:req.body.friendID}},
    {runValidators:true,new:true}
).then((result)=>res.json(data))

        }



    })
}











}