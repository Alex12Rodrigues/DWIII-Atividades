/*
Autor: Marcos Paulo Cardoso Matos
Data: 24/08/2026

ver-01: Sem chamada Assincrona, webserver simples.
ver-02: Com chamada Assincrona (implementando callback)
ver-03: Criando rotas (end-point) na aplicação.
ver-04: Abrir arquivos no end-points

*/

// Carregar os Modulos:
const http = require('http');
const url = require('url');
const fs = require('fs');

//Função para ler arquivo e enviar no response http:
function readFile(response, file) {
    //Fazer a leitura do arquivo de forma assincrona:
    fs.readFile(file, function (err, data) {
        response.end(data);
    });
    // Apos ler, escrever no response (http) o conteudo:
}

//Aplicação Isolada - Com Callback:
var callback = function (request, response) {
    // Faz o Parse da URL, seppara os end-points.
    var parts = url.parse(request.url);

    // verificar os end-points:
    if (parts.path === "/") {
        response.writeHead(200, { 'content-type': 'text/html' });
        readFile(response, "index.html")

    } else if (parts.path === "/arquivo/fatec") {
        response.writeHead(200, { 'content-type': 'image/jpg' });
        readFile(response, "imgFatec.jpg")

    } else if (parts.path === "/arquivo/logo") {
        response.writeHead(200, { 'content-type': 'image/png' });
        readFile(response, "imgLogo.png")

    } else if (parts.path === "/arquivo/pdf") {
        response.writeHead(200, { 'content-type': 'application/pdf' });
        readFile(response, "Gabarito.pdf")

    } else {
        response.writeHead(404, { 'content-type': 'text/html' });
        readFile(response, "erro404.html")
    }

}

// Servidor - Criar e Configurar:
var server = http.createServer(callback);

server.listen(3000)
console.log('Servidor iniciado em http://localhost:3000')