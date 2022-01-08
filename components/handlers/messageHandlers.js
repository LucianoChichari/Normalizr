const DBServices = require ('../services/DBServices')
const path = require('path')

class MessageHandler{

    async getMessagesForm(req, res, next){
        
        let storedMessages = await DBServices.readMessages()
        res.render(path.join(__dirname, '../../views/layouts/index.ejs'), {storedMessages})
    }

    async readMessages(){
        let storedMessages = await DBServices.readMessages()
        return storedMessages
        }

    async writeMessages(socket){
        await DBServices.writeMessages(socket)
    }
}

module.exports = new MessageHandler()


