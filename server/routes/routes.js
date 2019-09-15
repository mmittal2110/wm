var express = require('express');
var router = express.Router();
var userController  = require('../controllers/user-controllers')

// user register 
router.post('/register',userController.register)

//resend otp
router.post('/send-otp', userController.sendOtp)


//verify otp
router.post('/verify-otp', userController.verifyOtp)
/*
//login
router.post('/login', userController.login)*/

module.exports = router;