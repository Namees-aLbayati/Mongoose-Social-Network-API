const {User,Thoughts}=require('../model');
module.exports={
    createUser(req,res){
        console.log('recived post user')
        User.create(req.body)
        .then((result)=>
            res.json(result))
            .catch((err)=>res.json(err))
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

// addReactions(req,res){
//         Thoughts.findOneAndUpdate(

//         )
// }










}