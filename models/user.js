const {sequelize,Sequelize} = require('./db') ;

const User = sequelize.define('users',{
    id:{
        type:Sequelize.INTEGER,
        primaryKey:true
    },
    username:{
        type:Sequelize.STRING,
    },
    password:{
        type:Sequelize.STRING,
    },
    email:{
        type:Sequelize.STRING,
    },
    gender: {
        type:Sequelize.ENUM('男','女')
    },
    createdAt:{
        type:Sequelize.DATE
    },
    updatedAt:{
        type:Sequelize.DATE
    },
    is_ban :{
        type:Sequelize.INTEGER
    },
    age: {
        type:Sequelize.INTEGER
    }

},{ timestamps:false })

module.exports = User ;
