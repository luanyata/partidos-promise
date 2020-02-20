const chai = require('chai')
const mocha = require('mocha')
const chaiAsPromised = require('chai-as-promised')

const partidos = require('../../src/')

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
