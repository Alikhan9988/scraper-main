const express = require('express')
const router =express.Router()
const { scrapeSite } = require('../controllers/scrapper')
const path =require('path')

router.get('^/$|/index(.html)?', (req, res) => {
   scrapeSite(req, res)
})  

const interval = 5 * 60 * 1000; // Five minutes in milliseconds
setInterval(() => {
  scrapeSite();
}, interval);

module.exports = router