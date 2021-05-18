// vamos definir as operações que a api vai realizar
// importa o esquema CEP
const SchemaCep = require('./cep')

// define os métodos ou serviços
SchemaCep.methods(['get', 'post', 'put', 'delete'])

// define as opções quando faz update
SchemaCep.updateOptions({new: true, runValidators: true})

// exporta para ser usada em outro arquivo
module.exports = SchemaCep