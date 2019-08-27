var express = require('express');
var router = express.Router();
var userController  = require('../controllers/user-controllers')

// user register 
router.post('/register',userController.register)

//resend otp
router.post('/sendOtp', userController.sendOtp)

//verify otp


//login

module.exports = router;