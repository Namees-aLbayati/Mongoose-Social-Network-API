const router=require('express').Router();
const {createUser,addThoughts}=require('../controllers/userControllers');
router.route('/user').post(createUser);
router.route('/thoughts').post(addThoughts);

module.exports=router