/*
Autor: Marcos Paulo Cardoso Matos
Data: 24/08/2026

ver-01: Sem chamada Assincrona, webserver simples.
ver-02: Com chamada Assincrona (implementando callback)

*/

// Carregar os Modulos:
const http = require('http');

//Aplicação Isolada - Com Callback:
var callback = function (request, response) {
    response.writeHead(200, { 'content-type': 'text/plain' });
    response.end("Part02");
}

// Servidor - Criar e Configurar:
var server = http.createServer(callback);

server.listen(3000)
console.log('Servidor iniciado em http://localhost:3000')