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
function verfiyOTP(phone, OTP, next) {
   usersModel.find({ phone: phone}, { otp: 1 }, function (err, result) {
      next(err, result)
   })
}


//update User Status
function updateUserStatus(userid,next){
   usersModel.update({_id: userid}, {
    status:"V"
   }, function(err, affected, resp) {
      next(err,affected);
   })
}


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

            generateOtp(config.otpLength,function(otp){
            req.body['status'] = 'UV';
            req.body['otp'] = otp;
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
               .catch(err => {
                  errorDTO.data = err;
                  res.statusCode = 400;
                  res.json(errorDTO);
               });
            })

         } else {
            errorDTO.message= 'User Already Registered'
            res.statusCode = 400;
            res.json(errorDTO);
         }
      }
   })

}


//login user
userController.login = function(req,res)


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


//verify otp
userController.verifyOtp = function(req,res){
   var successDTO = {
      status: 200,
      level: 'success',
      message: 'User verified successfully',
   }
   var errorDTO = {
      status: 400,
      level: 'error',
      message: 'Verification failed',
   }


   verfiyOTP(req.body.phone, req.body.otp, function (error,result) {
      if(result && result[0].otp == req.body.otp){
         updateUserStatus(result && result[0]._id, function (errorData,resultData) {
              if(resultData && resultData.ok == 1){
                 successDTO.data = resultData;
                 res.statusCode = 200;
                 res.json(successDTO);
              }
         })

      }else{
         errorDTO.data = error;
         errorDTO.message =  'OTP verfication failed.'
         res.statusCode = 400;
         res.json(errorDTO);
      }
   })

}



module.exports = userController;