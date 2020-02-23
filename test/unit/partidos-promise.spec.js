const chai = require('chai')
const mocha = require('mocha')
const chaiAsPromised = require('chai-as-promised')

const partidos = require('../../src/')

chai.use(chaiAsPromised)

mocha.describe('partidos-promise (generalismo) (testes unitários)', function () {
  mocha.it('A bibliioteca é um objeto', function () {
    return chai.expect(partidos).to.be.a('object')
  })

  const methods = [
    { name: 'get', typeOfReturn: 'object' },
    { name: 'member', typeOfReturn: 'object' }
  ]

  methods.forEach(function (method) {
    mocha.it(`O objeto tem uma propriedade chamada "${method.name}"`, function () {
      return chai.expect(partidos).to.have.property(method.name)
    })

    mocha.it(`A propriedade "${method.name}" é uma função assíncrona`, function () {
      return chai.expect(partidos[method.name]).to.be.a('AsyncFunction')
    })

    mocha.it(`O método "${method.name}" retorna um(a) ${method.typeOfReturn}`, function () {
      const result = partidos[method.name]()
      return chai.expect(result).eventually.to.be.a(method.typeOfReturn)
    })
  })
})
