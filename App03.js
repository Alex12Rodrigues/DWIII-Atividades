/*
Autor: Marcos Paulo Cardoso Matos
Data: 24/08/2026

ver-01: Sem chamada Assincrona, webserver simples.
ver-02: Com chamada Assincrona (implementando callback)
ver-03: Criando rotas (end-point) na aplicação.

*/

// Carregar os Modulos:
const http = require('http');
const url = require('url');

//Aplicação Isolada - Com Callback:
var callback = function (request, response) {
    // Faz o Parse da URL, seppara os end-points.
    var parts = url.parse(request.url);

    // verificar os end-points:
    if (parts.path === "/") {
        response.writeHead(200, { 'content-type': 'text/plain' });
        response.end("Opa rota principal");

    } else if (parts.path == "/rota01") {
        response.writeHead(200, { 'content-type': 'text/plain' });
        response.end("Rota 01");

    } else if (parts.path == "/rota02") {
        response.writeHead(200, { 'content-type': 'text/plain' });
        response.end("Rota 02");

    } else {
        response.writeHead(404, { 'content-type': 'text/plain' });
        response.end("404 - Item não encontrado");
    }

}

// Servidor - Criar e Configurar:
var server = http.createServer(callback);

server.listen(3000)
console.log('Servidor iniciado em http://localhost:3000')