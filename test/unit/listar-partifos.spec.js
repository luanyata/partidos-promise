const chai = require('chai')
const mocha = require('mocha')
const sinon = require('sinon')
const axios = require('axios')
const chaiAsPromised = require('chai-as-promised')
const createError = require('axios/lib/core/createError')

const partidos = require('../../src/')
const errors = require('../../src/errors')

chai.use(chaiAsPromised)

const sandbox = sinon.createSandbox()

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

  mocha.it('Is the body of the responses expected?', function () {
    const result = partidos.list()
    const validItem = { id: 1, sigla: 'ABcD', nome: 'Partido Aleatório do Brasil' }
    return chai.expect(result).eventually.to.include(validItem)
  })

  mocha.afterEach(function () {
    sandbox.restore()
  })
})

mocha.describe('Lists political parties with API errors (unit tests)', function () {
  mocha.beforeEach(function () {
    sandbox.replace(axios, 'get', async (path) => {
      const request = { path }
      const data = { foo: 'bar' }
      const response = { status: 500, data }
      throw createError('This is a test', data, 'TEST', request, response)
    })
  })

  mocha.it('Is the correct error thrown when the API is down?', function () {
    const result = partidos.list()
    return chai.expect(result).to.eventually.be.rejectedWith(errors.ApiError)
  })

  mocha.afterEach(function () {
    sandbox.restore()
  })
})
