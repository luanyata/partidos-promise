const chai = require('chai')
const mocha = require('mocha')
const sinon = require('sinon')
const axios = require('axios')
const chaiAsPromised = require('chai-as-promised')

const utils = require('../utils')
const partidos = require('../../src/')
const errors = require('../../src/errors')

chai.use(chaiAsPromised)

const sandbox = sinon.createSandbox()

mocha.describe('Partidos-promise (testes e2e)', function () {
  mocha.beforeEach(function () {
    sandbox.replace(axios, 'get', utils.fakeServer)
  })

  mocha.it('Listando partidos', function () {
    const result = partidos.list()
    return chai.expect(result).eventually.to.deep.equal([
      {
        id: 1,
        sigla: 'ABcD',
        nome: 'Partido Aleatório do Brasil'
      }, {
        id: 2,
        sigla: 'ABcD',
        nome: 'Partido Aleatório do Brasil'
      }, {
        id: 3,
        sigla: 'ABcD',
        nome: 'Partido Aleatório do Brasil'
      }
    ])
  })

  mocha.afterEach(function () {
    sandbox.restore()
  })
})

mocha.describe('Partidos-promise com falha na API (testes e2e)', function () {
  mocha.beforeEach(function () {
    sandbox.replace(axios, 'get', utils.fakeFailServer)
  })

  mocha.it('Listando partidos com falha na API', function () {
    const result = partidos.list()
    return chai.expect(result).to.eventually.be.rejectedWith(errors.ApiError)
  })

  mocha.afterEach(function () {
    sandbox.restore()
  })
})
