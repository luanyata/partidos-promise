const chai = require('chai')
const mocha = require('mocha')

const partidos = require('../../src')

mocha.describe('partidos-promise (unit tests)', function () {
  mocha.it('Should return a Object', function () {
    chai.expect(partidos).to.be.a('object')
  })

  const methods = ['list', 'get']

  methods.forEach(function (method) {
    mocha.it(`The object has a property "${method}"`, function () {
      chai.expect(partidos).to.have.property(method)
    })

    mocha.it(`The property "${method}" is a function`, function () {
      chai.expect(partidos[method]).to.be.a('function')
    })
  })
})
