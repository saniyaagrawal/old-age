var Hello = require('./controllers/hello');

const Routes = [
    {
        path: '/hello',
        method: 'get',
        action: Hello
    }
]

module.exports = Routes