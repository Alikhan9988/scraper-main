const express = require("express");
const router = express.Router();
const  verifySignUp  = require("../middleware/verifylogin");

const authcontrollers = require('../controllers/login');



router.post('/signup', [ verifySignUp.checkDuplicateUsernameOrEmail], authcontrollers.Auth);
router.post('/login',  authcontrollers.signIn);



module.exports = router;
