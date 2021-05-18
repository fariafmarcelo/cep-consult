// importa biblioteca node-restful
const restful = require('node-restful')
// api restful vai trabalhar em cima do banco de dados mongodb
const mongoose = restful.mongoose

// define o esquema do banco de dados para operar as opções de get, post, put e delete
const cepSchema = new mongoose.Schema({
    cep: {type: String, required: true},
    logradouro: {type: String, required: true},
    complemento: {type: String, required: true},
    bairro: {type: String, required: true},
    localidade: {type: String, required: true},
    uf: {type: String, required: true},
    ibge: {type: Number, required: true},
    ddd: {type: Number, required: true},
    siafi: {type: Number, required: true},
    gia: {type: Number, required: true}
})

// exportando
module.exports = restful.model('SchemaCep', cepSchema)