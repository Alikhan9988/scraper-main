const Sequelize = require('sequelize');

const sequelize = require('../utill/database');

const User = sequelize.define('user', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
 
  user_name: {
    type: Sequelize.STRING,
  },
  email: {
    type: Sequelize.STRING,
  },
  
  password: {
    type: Sequelize.STRING,
  },
});

module.exports = User;
