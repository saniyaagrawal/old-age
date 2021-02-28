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