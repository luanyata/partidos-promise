<p align="center">
  <img height="256px" style="border-radius:8px" src="https://logodownload.org/wp-content/uploads/2017/11/camara-dos-deputados-logo-1.png" />
</p>

<h1 align="center">Partidos Promise</h1>

<p align="center">
  Buscas por partidos políticos integrado aos dados abertos da Câmara dos deputados.
</p>

<p align="center">
  <a href="https://github.com/Otoru/partidos-promise/blob/master/LICENSE.md">
    <img alt="GitHub" src="https://img.shields.io/github/license/Otoru/partidos-promise">
  </a>
  <a href="http://standardjs.com/">
    <img src="https://img.shields.io/badge/code%20style-standard-brightgreen.svg">
  </a>
</p>

## Características e Funcionalidades

- Todas as consultas são em em tempo real.
- Sem limites de uso (rate limits) conhecidos.
- Interface de Promise extremamente simples.

### Observações

- Informações disponiblizadas pela Câmara dos deputados através do sistema de sua política de [dados abertos](https://dadosabertos.camara.leg.br/).

### Utilização

Segue um pequeno exemplo de código dos métodos expostos pela biblioteca.

#### Listar partidos

Usando o método `list` você tem a lista de todos os partidos cadastrados na Câmara.

##### Código de exemplo

```js
const partidos = require('partidos-promise')

partidos.list().then(lista => {
  lista.forEach(partido => {
    console.log(partido)
  })
});

partidos.list({
  sigla: 'AB',
}).then(lista => {
  lista.forEach(partido => {
    console.log(partido)
  })
});
```

##### Parâmetros de busca

Podemos usar alguns parâmetros para fazer um filtro na hora de listas os partidos.


#### Buscar partidos e membros

```js
// Buscando um partido especifico
partidos.get({id: '12345'}).then(partido => {
  console.log(partido)
})

// Buscando um membro do partido
partidos.member({id: '12345'}).then(membro => {
  console.log(membro)
})
```

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

