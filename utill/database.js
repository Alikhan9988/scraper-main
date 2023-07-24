const Sequelize = require('sequelize');
const sequelize = new Sequelize('scrapper', 'root', '', {
  dialect: 'mysql',
  host: 'localhost',
})
sequelize
        .authenticate()
        
module.exports = sequelize;
