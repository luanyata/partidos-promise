const chai = require('chai')
const mocha = require('mocha')
const sinon = require('sinon')
const axios = require('axios')
const chaiAsPromised = require('chai-as-promised')

const partidos = require('../../src/')

chai.use(chaiAsPromised)

const sandbox = sinon.createSandbox()

const getLinks = pagina => {
  return [
    { 'rel': 'self', 'href': `https://dadosabertos.camara.leg.br/api/v2/partidos?pagina=${pagina}&itens=10` },
    { 'rel': 'next', 'href': `https://dadosabertos.camara.leg.br/api/v2/partidos?pagina=${pagina + 1}&itens=10` },
    { 'rel': 'first', 'href': 'https://dadosabertos.camara.leg.br/api/v2/partidos?pagina=1&itens=10' },
    { 'rel': 'last', 'href': 'https://dadosabertos.camara.leg.br/api/v2/partidos?pagina=3&itens=10' }
  ]
}

const getData = id => {
  return {
    dados: [ { id, 'sigla': 'ABcD', 'nome': 'Partido Aleatório do Brasil', 'uri': 'https://www.google.com' } ],
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

mocha.describe('List political parties (unit tests)', function () {
  mocha.beforeEach(function () {
    sandbox.replace(axios, 'get', fakeServer)
  })

  mocha.it('List is a async method', function () {
    return chai.expect(partidos.list).to.be.a('AsyncFunction')
  })

  mocha.it('List method return an array', function () {
    const result = partidos.list()
    return chai.expect(result).eventually.to.be.a('array')
  })

  mocha.it('Does the returned list contain all the parties?', function () {
    const result = partidos.list()
    return chai.expect(result).eventually.to.lengthOf(3)
  })

  mocha.afterEach(function () {
    sandbox.restore()
  })
})
