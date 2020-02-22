const axios = require('axios').default

const listLoader = async (url) => {
  const { data } = await axios.get(url)
  const { dados, links } = data
  const [self, next,, last] = links
  return [dados, self.href, next.href, last.href]
}

exports.list = async () => {
  let payload = []
  const URI = 'https://dadosabertos.camara.leg.br/api/v2/partidos?pagina=1&itens=10'

  let [dados, self, next, last] = await listLoader(URI)

  while (true) {
    payload = payload.concat(dados)
    if (self === last) break;
    ([dados, self, next, last] = await listLoader(next))
  }

  return payload.map(item => {
    const { id, sigla, nome } = item
    return { id, sigla, nome }
  })
}

exports.get = async () => {
  return {}
}

exports.member = async () => {
  return {}
}
