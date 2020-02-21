const chai = require('chai')
const mocha = require('mocha')
const chaiAsPromised = require('chai-as-promised')

const partidos = require('../../src/')
const errors = require('../../src/errors')

chai.use(chaiAsPromised)

mocha.describe('partidos-promise (unit tests)', function () {
  mocha.it('Should return a Object', function () {
    return chai.expect(partidos).to.be.a('object')
  })

  const methods = [
    {
      name: 'list',
      typeOfReturn: 'array'
    },
    {
      name: 'get',
      typeOfReturn: 'object'
    },
    {
      name: 'member',
      typeOfReturn: 'object'
    }
  ]

  methods.forEach(function (method) {
    mocha.it(`The object has a property "${method.name}"`, function () {
      return chai.expect(partidos).to.have.property(method.name)
    })

    mocha.it(`The property "${method.name}" is a function`, function () {
      return chai.expect(partidos[method.name]).to.be.a('AsyncFunction')
    })

    mocha.it(`The "${method.name}" method return and array`, function () {
      const result = partidos[method.name]()
      return chai.expect(result).eventually.to.be.a(method.typeOfReturn)
    })
  })
})

mocha.describe('List political parties (unit tests)', function () {
  const invalidPayloads = [
    {
      name: 'Acronym as integer',
      body: {
        sigla: 123
      }
    }
  ]

  const validPayloads = [
    {
      name: 'Valid Acronym',
      body: {
        sigla: 'PT'
      }
    }
  ]

  invalidPayloads.forEach(payload => {
    mocha.it(`${payload.name} generate a validation error?`, function () {
      const result = partidos.list(payload.body)
      return chai.expect(result).eventually.rejectedWith(errors.ValidationError)
    })
  })

  validPayloads.forEach(payload => {
    mocha.it(`${payload.name} generate a valid response type`, function () {
      const result = partidos.list(payload.body)
      return chai.expect(result).eventually.to.be.a('array')
    })
  })
})
