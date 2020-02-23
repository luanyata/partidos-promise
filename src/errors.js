exports.ApiError = class ApiError extends Error {
  constructor (message, error) {
    super(message)
    this.error = error
  }
}
