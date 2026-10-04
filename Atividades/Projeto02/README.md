# Projeto 02 - Portal FATEC Zona Sul

Portal do curso feito em Node.js (módulos `http`, `fs`, `path` e `url`), usando
NPM e a arquitetura com a pasta `/public` vista na aula de 28/09.

## Integrantes

- Alex Rodrigues de Oliveira
- Anna Marina Dantas da Silva

## Como rodar

```bash
cd Atividades/Projeto02
npm start
```

Depois é só acessar http://localhost:2000 no navegador.

## Rotas

| Rota                 | Arquivo                          |
|----------------------|----------------------------------|
| `/`                  | `public/index.html`              |
| `/vestibular`        | `public/vestibular.html`         |
| `/cursos`            | `public/cursos.html`             |
| `/cursos/ads`        | `public/cursos/ads.html`         |
| `/cursos/dsm`        | `public/cursos/dsm.html`         |
| `/cursos/gestao`     | `public/cursos/gestao.html`      |
| `/cursos/logistica`  | `public/cursos/logistica.html`   |
| `/infraestrutura`    | `public/infraestrutura.html`     |
| `/eventos`           | `public/eventos.html`            |
| `/quem-somos`        | `public/quem-somos.html`         |
| qualquer outra rota  | `public/erro404.html`            |

Os arquivos estáticos (CSS, JS, imagens e JSON) são servidos direto da pasta
`public`. A página de eventos carrega os dados de `public/dados/eventos.json`
com `fetch()`.

## Estrutura de pastas

```
Projeto02/
├── app.js               # servidor Node.js (porta 2000)
├── package.json         # configuração do NPM (npm start)
└── public/
    ├── index.html
    ├── vestibular.html
    ├── cursos.html
    ├── infraestrutura.html
    ├── eventos.html
    ├── quem-somos.html
    ├── erro404.html
    ├── cursos/          # uma página para cada curso
    ├── css/style.css
    ├── js/script.js
    ├── dados/eventos.json
    └── img/
```
