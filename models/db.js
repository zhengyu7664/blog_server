const Sequelize = require('sequelize') ;

const sequelize = new Sequelize('blog','root','zhengyu7664',{
    host:'119.23.232.5',
    dialect:'mysql',
    
    pool: {
        max:5,
        min:0,
        idle:1000
    }
})

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
  
module.exports = {sequelize,Sequelize} ;