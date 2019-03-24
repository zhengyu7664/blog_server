const Router = require('koa-router') ;

let userRouter = new Router() ;
let userController = require('../controllers/user') ;



userRouter
.post('/user/register',userController.register)
.get('/user',userController.getAllUser)


module.exports = userRouter ;