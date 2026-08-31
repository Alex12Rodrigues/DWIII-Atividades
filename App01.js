/*
Autor: Marcos Paulo Cardoso Matos
Data: 24/08/2026

ver-01: Sem chamada Assincrona, webserver simples.

*/

// Carregar os Modulos:
const http = require('http');

// Criar o Servidor:
var server = http.createServer(
    function (request, response) {
        response.writeHead(200, { 'content-type': 'text/plain' });
        response.end("Ola Mundo");
    }
)

// Configurar o Servidor:
server.listen(3000)
console.log('Servidor iniciado em http://localhost:3000')