const app = require('express')
const route = app.Router()





module.exports = (io) => {
    route.get('/', (req, res) => {
        res.send('ok')
    })

    route.post('/submit', (req, res) => {
        // io.emit('sucess', 'change data ')
        res.send()
    })

    return route
}