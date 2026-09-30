# DWIII - Atividades

Este repositório será usado para as atividades que o professor passar na
disciplina de **Desenvolvimento Web III**, do curso de Desenvolvimento de
Software Multiplataforma da FATEC Zona Sul. A cada nova atividade, uma pasta
será adicionada aqui.

## Integrantes

- Alex Rodrigues de Oliveira
- Anna Marina Dantas da Silva

## Atividades

| Pasta                                            | Atividade                                                        | Porta |
|--------------------------------------------------|------------------------------------------------------------------|-------|
| [`Atividades`](Atividades)                       | Projeto 01 - site de apresentação pessoal da dupla               | 3000  |
| [`Projeto02`](Projeto02)                         | Projeto 02 - portal da FATEC Zona Sul (NPM + pasta `/public`)    | 2000  |
| [`Projeto02_Estilizado`](Projeto02_Estilizado)   | Projeto 02 - mesma versão, apenas com um CSS mais elaborado      | 2000  |

As duas pastas do Projeto 02 têm o seu próprio `README.md` com rotas e
estrutura de pastas.

---

## Projeto 01 - Apresentação pessoal

Site de apresentação pessoal da dupla, feito em Node.js puro (módulos `http`,
`url` e `fs`), com base nos exemplos vistos em aula.

### Como rodar

```bash
cd Atividades
node app.js
```

Depois é só acessar http://localhost:3000 no navegador.

### Estrutura de rotas

| Rota                 | Conteúdo                                   |
|-----------------------|---------------------------------------------|
| `/`                   | `index.html` - página principal              |
| `/alex`               | menu pessoal de Alex                         |
| `/alex/sobre`         | "quem sou" de Alex                           |
| `/alex/curriculo`     | currículo de Alex em PDF                     |
| `/alex/foto`          | foto de Alex                                 |
| `/anna`               | menu pessoal de Anna                         |
| `/anna/sobre`         | "quem sou" de Anna                           |
| `/anna/curriculo`     | currículo de Anna em PDF                     |
| `/anna/foto`          | foto de Anna                                 |
| `/projeto`            | documentação completa do projeto em PDF      |
| qualquer outra rota   | `erro404.html`                               |

### Estrutura de pastas

```
Atividades/
├── app.js                 # servidor Node.js (rotas)
├── index.html              # página principal
├── erro404.html            # página de erro 404
├── alex/
│   ├── index.html          # menu do Alex
│   ├── sobre.html          # "quem sou" do Alex
│   ├── curriculo.pdf       # currículo do Alex
│   └── foto.jpg            # foto do Alex
├── anna/
│   ├── index.html          # menu da Anna
│   ├── sobre.html          # "quem sou" da Anna
│   ├── curriculo.pdf       # currículo da Anna
│   └── foto.jpg            # foto da Anna
└── projeto/
    └── documentacao.pdf    # documentação do projeto (código-fonte incluso)
```
