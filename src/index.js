const Joi = require('@hapi/joi')

const errors = require('./errors')

exports.list = async (payload = undefined) => {
  const schema = Joi.object({
    sigla: Joi.string().regex(/^[A-Z]{2,}$/)
  })

  const { error } = schema.validate(payload)
  if (error) throw new errors.ValidationError(error.message)

  return []
}

exports.get = async () => {
  return {}
}

exports.member = async () => {
  return {}
}
