var {getOldages, addOldage} = require('./controllers/oldage'); 
var  {signup, verifyOtp, login} = require('./controllers/user');


const Routes = [
    {
        path: '/oldage',
        method: 'get',
        action: getOldages
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
]

module.exports = Routes