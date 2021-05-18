// importa o express pois as rotas são definidas no servidor web
const express = require('express')

// programação funcional

module.exports = function(server) { //o parametro representa o servidor
    //cria um objeto de roteamento de rotas
    const router = express.Router()

    server.use('/api', router) // o servidor web via rotear a partir da rota /api

    // rota especifica para o cep
    const cepService = require('../api/cep/cepService')

    // registra a rota do cep
    cepService.register(router, '/cep')
}