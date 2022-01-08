let {schema, normalize} = require ('normalizr')
let compression = require ('../../utils/compression')


module.exports = (denormalizedData) =>{

let autorSchema = new schema.Entity('author', {}, {idAttribute:'id_author'})

let mensajeSchema = new schema.Entity('mensaje',{author: autorSchema}, {idAttribute:'id'})

let mensajesSchema = new schema.Entity('mensajes',{denormalizedData: [mensajeSchema]}, {idAttribute:'id'})

let normalizedData = normalize({id:'mensajesNormalizados', denormalizedData}, mensajesSchema)

let compressedPercentage = compression(normalizedData, denormalizedData)

return {normalizedData, denormalizedData, mensajesSchema, compressedPercentage }

}