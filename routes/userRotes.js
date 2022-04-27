const router=require('express').Router();
const {createUser,deleteUser,removeThoughtsandFriends,addThoughts,addReactions,findallUser,updateUser,findthoughts}=require('../controllers/userControllers');
router.route('/user/:id?').post(createUser).get(findallUser).put(updateUser).delete(deleteUser)
router.route('/thoughts/:id?').post(addThoughts).get(findthoughts).put(removeThoughtsandFriends)
router.route('/reaction').post(addReactions);


module.exports=router