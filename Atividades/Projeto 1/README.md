# Projeto 01 - Apresentação pessoal

Site de apresentação pessoal da dupla, feito em Node.js puro (módulos `http`,
`url` e `fs`), com base nos exemplos vistos em aula.

## Integrantes

- Alex Rodrigues de Oliveira
- Anna Marina Dantas da Silva

## Como rodar

```bash
node app.js
```

Depois é só acessar http://localhost:3000 no navegador.

## Rotas

| Rota                | Conteúdo                              |
|---------------------|---------------------------------------|
| `/`                 | página principal                      |
| `/alex`             | menu do Alex                          |
| `/alex/sobre`       | "quem sou" do Alex                    |
| `/alex/curriculo`   | currículo do Alex (PDF)               |
| `/alex/foto`        | foto do Alex                          |
| `/anna`             | menu da Anna                          |
| `/anna/sobre`       | "quem sou" da Anna                    |
| `/anna/curriculo`   | currículo da Anna (PDF)               |
| `/anna/foto`        | foto da Anna                          |
| `/projeto`          | documentação do projeto (PDF)         |
| qualquer outra rota | `erro404.html`                        |

O documento de entrega da dupla está em `ALEX E ANNA.docx` / `ALEX E ANNA.pdf`.
