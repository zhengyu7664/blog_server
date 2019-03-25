
const UserModel = require('../models/user') ;


module.exports = {

    // 用户注册
    register(ctx,next) {
        console.log(ctx.request.body) ;
    },
    async getAllUser(ctx,next) {

        console.log(await UserModel.findAll())


    }


}