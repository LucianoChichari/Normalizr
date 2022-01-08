const messageHandlers = require('../handlers/messageHandlers')

module.exports = (io) =>{

    io.on('connection', async (socket) => {
        let response = await messageHandlers.readMessages()
        io.sockets.emit('messageNotification', response)
        
        socket.on('messageNotification', async socket => {
          await messageHandlers.writeMessages(socket)
          let response = await messageHandlers.readMessages()
          io.sockets.emit('messageNotification', response)
        })
      })
}


