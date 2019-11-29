# Testes de contrato com joi

Projeto de exemplo para a implementação de testes de contrato de API utilizando o JOI

## Ferramentas utilizadas:
- [VSCode](https://code.visualstudio.com/ "VSCode") / [IntelliJ CE](https://www.jetbrains.com/idea/download/ "IntelliJ CE")
- [Joi](https://github.com/hapijs/joi "Joi")
- [joiAssert](https://github.com/Bartvds/joi-assert "Joi assert")
- [Mocha](https://github.com/mochajs/mocha "Mocha")
- [Supertest](https://github.com/visionmedia/supertest "Supertest")
- [Mochawesome](https://github.com/adamgruber/mochawesome "Mochawesome")

## Recursos utilizados no projeto
- **Mocha**
	- describe
    - it
- **Joi**
	- Tipagens dos contratos.
- **Supertest**
    - get
    - expect
    - end
- **joiAssert**
    - assert

## Estrutura de pastas

```
📦max
 ┣ 📂mochawesome-report
 ┃ ┣ 📂assets
 ┃ ┃ ┣ 📜MaterialIcons-Regular.woff
 ┃ ┃ ┣ 📜MaterialIcons-Regular.woff2
 ┃ ┃ ┣ 📜app.css
 ┃ ┃ ┣ 📜app.js
 ┃ ┃ ┣ 📜roboto-light-webfont.woff
 ┃ ┃ ┣ 📜roboto-light-webfont.woff2
 ┃ ┃ ┣ 📜roboto-medium-webfont.woff
 ┃ ┃ ┣ 📜roboto-medium-webfont.woff2
 ┃ ┃ ┣ 📜roboto-regular-webfont.woff
 ┃ ┃ ┗ 📜roboto-regular-webfont.woff2
 ┃ ┣ 📜mochawesome.html
 ┃ ┗ 📜mochawesome.json
 ┣ 📂test
 ┃ ┗ 📂contracts
 ┃ ┃ ┣ 📂posts
 ┃ ┃ ┃ ┗ 📜posts.js
 ┃ ┃ ┣ 📂users
 ┃ ┃ ┃ ┗ 📜users.js
 ┃ ┃ ┣ 📜helpers.js
 ┃ ┃ ┗ 📜mocha.opts
 ┣ 📜.babelrc
 ┣ 📜.gitignore
 ┣ 📜README.md
 ┗ 📜package.json
```

## Post no medium explicando passo a passo: [Testes de contrato de API com Joi](https://medium.com/cwi-software/testes-de-contrato-de-api-com-joi-1ce552fe2531 "Testes de contrato de API com Joi")