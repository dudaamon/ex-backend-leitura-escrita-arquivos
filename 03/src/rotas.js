const express = require('express');
const rotas = express();
const { encontrarEnderecos } = require('./controladores/endereco')

rotas.get('/enderecos/:cep', encontrarEnderecos);

module.exports = rotas;