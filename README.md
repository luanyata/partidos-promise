<p align="center">
  <img height="256px" style="border-radius:8px" src="https://logodownload.org/wp-content/uploads/2017/11/camara-dos-deputados-logo-1.png" />
</p>

<h1 align="center">Partidos Promise</h1>

<p align="center">
  Buscas por partidos políticos integrado aos dados abertos da Câmara dos deputados.
</p>

<p align="center">
  <a href="https://github.com/Otoru/partidos-promise/blob/master/LICENSE.md">
    <img alt="build" src="https://travis-ci.org/Otoru/partidos-promise.svg">
  </a>
  <a href="https://www.npmjs.com/package/partidos-promise">
    <img alt="npm" src="https://img.shields.io/npm/v/partidos-promise">
  </a>
  <a href="http://standardjs.com/">
    <img alt="standard" src="https://img.shields.io/badge/code%20style-standard-brightgreen.svg">
  </a>
  <a href="https://snyk.io/test/github/Otoru/partidos-promise?targetFile=package.json">
    <img src="https://snyk.io/test/github/Otoru/partidos-promise/badge.svg?targetFile=package.json" alt="Known Vulnerabilities" data-canonical-src="https://snyk.io/test/github/Otoru/partidos-promise?targetFile=package.json" style="max-width:100%;">
  </a>
</p>

## Características e Funcionalidades

- Todas as consultas são em em tempo real.
- Sem limites de uso (rate limits) conhecidos.
- Interface de Promise extremamente simples.

### Observações

- Informações disponiblizadas pela Câmara dos deputados através do sistema de sua política de [dados abertos](https://dadosabertos.camara.leg.br/).

### Utilização

Você pode clicar [aqui](https://npm.runkit.com/partidos-promise) para ver a biblioteca em funcionamento, mas caso prefira, segue um pequeno exemplo de código dos métodos expostos.

#### Listar partidos

Usando o método `list` você tem a lista de todos os partidos cadastrados na Câmara.

##### Código de exemplo

```js
const partidos = require('partidos-promise')

partidos.list().then(console.log);

// [
//   {
//     id: 1,
//     sigla: 'ABcD',
//     nome: 'Partido Aleatório do Brasil',
//   },
//   {
//     id: 2,
//     sigla: 'ABcD',
//     nome: 'Partido Aleatório do Brasil',
//   }
// ]
```

#### Buscar partidos e membros

```js
// Buscando um partido especifico
partidos.get({id: '12345'}).then(console.log)

// Buscando um membro do partido
partidos.member({id: '12345'}).then(console.log)
```

#### Tratamento de erros

Todos os erros da API são encapsulados em um `ApiError` que contem dois campos, `message` e `error`.
O campo `error` permite ao desenvolvedor ter acesso ao erro que gerou a exceção e realizar um tratamento personalizado.

#### Observações

- O projeto se encontra na etapa de planejamento.
- Conforme as funcionalidades forem sendo desenvolvidas, esta documentação deve mellhorar.

## Como contribuir

Leia nosso guia de contribuição [aqui](CONTRIBUTING.md)

## Contribuidores

Serão bem vindos ❤️

## Autor

| [<img src="https://avatars0.githubusercontent.com/u/26543872?v=3&s=115"><br><sub>@Otoru</sub>](https://github.com/Otoru) |
| :----------------------------------------------------------------------------------------------------------------------: |

