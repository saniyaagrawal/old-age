var {getOldages, addOldage} = require('./controllers/oldage'); 


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
    }
]

module.exports = Routes