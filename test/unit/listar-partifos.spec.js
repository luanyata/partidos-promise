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

mocha.describe('Listar partidos (testes unitários)', function () {
  mocha.beforeEach(function () {
    sandbox.replace(axios, 'get', utils.fakeServer)
  })

  mocha.it('List é um método assíncrono', function () {
    return chai.expect(partidos.list).to.be.a('AsyncFunction')
  })

  mocha.it('o método list retorna um array', function () {
    const result = partidos.list()
    return chai.expect(result).eventually.to.be.a('array')
  })

  mocha.it('O array retornado contem todos os partidos', function () {
    const result = partidos.list()
    return chai.expect(result).eventually.to.lengthOf(3)
  })

  mocha.it('A estrutra da resposta é a esperada', function () {
    const result = partidos.list()
    const validItem = { id: 1, sigla: 'ABcD', nome: 'Partido Aleatório do Brasil' }
    return chai.expect(result).eventually.to.include(validItem)
  })

  mocha.afterEach(function () {
    sandbox.restore()
  })
})

mocha.describe('Listar partidos com problemas na API (testes unitários)', function () {
  mocha.beforeEach(function () {
    sandbox.replace(axios, 'get', utils.fakeFailServer)
  })

  mocha.it('Quando a API está fora, o erro é o esperado', function () {
    const result = partidos.list()
    return chai.expect(result).to.eventually.be.rejectedWith(errors.ApiError)
  })

  mocha.afterEach(function () {
    sandbox.restore()
  })
})
