const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const indexRouter = require('./route')
const cors = require('cors')

app.use(cors())
app.use(bodyParser.json())

const server = app.listen(3000, () => {
    console.log(`server is running on 3000`)
})

const io = require('socket.io')(server, {
    cors: {
        origins: '*'
    }
});
app.use('/api', indexRouter(io))

io.sockets.on('connection', (socket) => {
    socket.on('population', (values) => {
        console.log(values)
        io.emit('chart', Object.values(values));


    })
    socket.on('expense', (values) => {
        console.log(values)
        io.emit('pie', Object.values(values));
    })

    // console.log(`new connection id:${socket.id}`)
    // sendData(socket)
    // setInterval(() => {
    sendData(socket);
    // }, 1000);
})


let x = true
function sendData(socket) {
    console.log("inside old ")
    socket.emit('chart', Array.from({ length: 8 }, () => Math.floor(Math.random() * 590) + 10));
    socket.emit('pie', Array.from({ length: 8 }, () => Math.floor(Math.random() * 590) + 10));

}






