const { messagesModel : db } = require('../../config/db')
const normalizar = require('./normalizr')

class DBServices{
    
        writeMessages = async (message) => {
            try {
                await db.create(message);
                return message
                
            } catch (error) {
                console.log('error en la creacion de mensajes' + error)
            }
        }

        readMessages = async () => {
            try {
                let messages = await db.find()
                let {normalizedData, denormalizedData, mensajesSchema, compressedPercentage} = normalizar(messages)
                return {normalizedData, denormalizedData, mensajesSchema, compressedPercentage}
                
            } catch (error) {
                console.log('error en la lectura de mensajes' + error)
            }
        }
        }
module.exports = new DBServices()