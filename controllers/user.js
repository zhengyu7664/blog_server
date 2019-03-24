
const UserModel = require('../models/user') ;


module.exports = {

    register(ctx,next) {

    },
    async getAllUser(ctx,next) {

        console.log(await UserModel.findAll())


    }


}