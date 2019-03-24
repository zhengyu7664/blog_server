const {sequelize,Sequelize} = require('./db') ;

const User = sequelize.define('users',{
    id:{
        type:Sequelize.STRING,
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
    }
},{ timestamps:false })

module.exports = User ;
