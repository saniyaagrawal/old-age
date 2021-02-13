var {getOldages, addOldage} = require('./controllers/oldage'); 
var  {signup} = require('./controllers/user');


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
    }
]

module.exports = Routes