exports.ValidationError = class ValidationError extends Error {
  constructor (message) {
    super(message)
    this.message = message
  }

  json () {
    return {
      type: 'validation_error',
      message: this.message
    }
  }
}
