require('dotenv').config()
const express = require('express');
const app =express()
const path= require('path')
const { logger } = require('./middleware/logger')
const errorHandler = require('./middleware/errorHandler')
const bodyParser = require('body-parser');
const sequelize = require('./utill/database');

const PORT =process.env.PORT || 3500





app.use(logger)
app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);
console.log(process.env.NODE_ENV)

console.log('Im running')

const UserRoutes = require('./routes/login');
app.use('/', require('./routes/scrapperRoute'))

app.use(UserRoutes);
sequelize
  .sync(
    // { force: true }
    )
 
  .then(cart => {
    app.listen(PORT);
    console.log("Server is Running on PORT", PORT)
  })
  .catch(err => {
    console.log(err);
  });
