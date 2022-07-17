const UserController = require('../controllers/UserController');
const Router= require('express').Router;
const router=new Router();
const controller=new UserController()
router.get('/user',controller.list);
router.post('/user',controller.create);
module.exports=router;
