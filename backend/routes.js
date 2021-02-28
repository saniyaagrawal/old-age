var  {signup, verifyOtp, login} = require('./controllers/user');
var {getOldages, getOldage, addOldage, addBankdetails} = require('./controllers/oldage'); 
var {addReview} = require('./controllers/review'); 

const Routes = [
    {
        path: '/oldage',
        method: 'get',
        action: getOldages
    },
    {
        path: '/oldage/:oldageId',
        method: 'get',
        action: getOldage
    },
    {
        path: '/oldage',
        method: 'post',
        action: addOldage
    },
    {
        path: '/signup',
        method: 'post',
        action: signup
    },
    {
        path: '/verifyotp',
        method: 'post',
        action: verifyOtp
    },
    {
        path: '/login',
        method: 'post',
        action: login
    }
    {
        path: '/oldage/:oldageId/review',
        method: 'post',
        action: addReview
    },
    {
        path: '/oldage/:oldageId/bankdetails',
        method: 'post',
        action: addBankdetails
    }
]

module.exports = Routes