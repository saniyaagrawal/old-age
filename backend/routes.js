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
        path: '/add',
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
    },
    {
        path: '/oldage/:oldageId/review',
        method: 'post',
        action: addReview
    }
]

module.exports = Routes