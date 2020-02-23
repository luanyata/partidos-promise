const createError = require('axios/lib/core/createError')

const getLinks = pagina => {
  const next = pagina + 1
  return [
    { rel: 'self', href: `https://dadosabertos.camara.leg.br/api/v2/partidos?pagina=${pagina}&itens=10` },
    { rel: 'next', href: `https://dadosabertos.camara.leg.br/api/v2/partidos?pagina=${next}&itens=10` },
    { rel: 'first', href: 'https://dadosabertos.camara.leg.br/api/v2/partidos?pagina=1&itens=10' },
    { rel: 'last', href: 'https://dadosabertos.camara.leg.br/api/v2/partidos?pagina=3&itens=10' }
  ]
}

const getData = id => {
  return {
    dados: [ { id, sigla: 'ABcD', nome: 'Partido Aleatório do Brasil', url: 'https://www.google.com' } ],
    links: getLinks(id)
  }
}

const fakeServer = async path => {
  switch (path) {
    case 'https://dadosabertos.camara.leg.br/api/v2/partidos?pagina=1&itens=10':
      return { data: getData(1) }
    case 'https://dadosabertos.camara.leg.br/api/v2/partidos?pagina=2&itens=10':
      return { data: getData(2) }
    case 'https://dadosabertos.camara.leg.br/api/v2/partidos?pagina=3&itens=10':
      return { data: getData(3) }
  }
}

const fakeFailServer = async (path) => {
  const request = { path }
  const data = { foo: 'bar' }
  const response = { status: 500, data }
  throw createError('This is a test', data, 'TEST', request, response)
}

exports.fakeServer = fakeServer
exports.fakeFailServer = fakeFailServer
