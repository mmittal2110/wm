const config = require('../config/config');
const otpModule = require('sendotp');
const sendOtp = new otpModule(config.sendOtpAuth);
var usersModel = require('../models/user-model');
var userController = {};

//========================utility functions ==============================

//match user with existing users(only verified user) 
function matchUser(phone, next) {
   usersModel.find({ phone: phone, status: 'v' }, { phone: 1 }, function (err, result) {
      next(err, result)
   })
}

//generate random OTP
function generateOtp(length, next) {
   var otp =  Math.floor(Math.pow(10, length-1) + Math.random() * (Math.pow(10, length) - Math.pow(10, length-1) - 1));
   next(otp);
}

//send OTP 
function sendVerficationOTP(phone, OTP, next) {
   sendOtp.send(phone, config.otpIdentification, OTP, function (error, data) {
      next(error, data)
   });
}

//verify OTP

//update User Status

//update user OTP

//get user OTP



//========================API main functions ==============================


//register user
userController.register = function (req, res) {
   //match user with existing users(only verified user) before registration
   matchUser(req.body.phone, function (err, result) {
      if (err) {
         var errorDTO = {
            status: 500,
            level: 'error',
            message: 'Something went wrong'
         }
         res.statusCode = 500;
         res.json(errorDTO);
      } else {
         if (result && !result.length) {
            req.body['status'] = 'UV';
            req.body['otp'] = '';
            var data = new usersModel(req.body);
            var successDTO = {
               status: 200,
               level: 'success',
               message: 'Otp has been sent for the verification',
            }
            var errorDTO = {
               status: 400,
               level: 'error',
               message: 'Something went wrong',
            }
            data.save()
               .then(item => {
                  generateOtp(config.otpLength,function(otp){
                     sendVerficationOTP(item.phone,otp,function(error,resultData){
                        if(resultData && resultData.type != 'error'){
                           successDTO.data = item;
                           successDTO.otpdata = resultData;
                           res.statusCode = 201;
                           res.json(successDTO);
                        }else{
                           errorDTO.data = resultData;
                           errorDTO.message =  'OTP sending failed.'
                           res.statusCode = 400;
                           res.json(errorDTO);
                        }
                        
                     })
                  })
               })
               .catch(err => {
                  errorDTO.data = err;
                  res.statusCode = 400;
                  res.json(errorDTO);
               });
         } else {
            errorDTO.message= 'User Already Registered'
            res.statusCode = 400;
            res.json(errorDTO);
         }
      }
   })

}


//login user


//send otp
userController.sendOtp = function(req,res){
   sendVerficationOTP(req.body.phone,otp,function(error,resultData){
      if(resultData && resultData.type != 'error'){
         successDTO.data = item;
         successDTO.otpdata = resultData;
         res.statusCode = 201;
         res.json(successDTO);
      }else{
         errorDTO.data = resultData;
         errorDTO.message =  'OTP sending failed.'
         res.json(errorDTO);
      }
      
   })
}


//verify user


module.exports = userController;