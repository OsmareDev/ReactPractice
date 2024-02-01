const logger = require('../utils/logger')

const ERROR_HANDLERS = {
  CastError: response =>
    response.status(400).send({ error: 'id used is malformatted' }),
  ValidationError: (response, { message }) =>
    response.status(409).send({ error: message }),
  JsonWebTokenError: response =>
    response.status(401).send({ error: 'token missing or invalid' }),
  TokenExpirerError: response =>
    response.status(401).send({ error: 'token expired' }),
  DefaultError: response =>
    response.status(500).end()
}

module.exports = (error, request, response, next) => {
  logger.error('logging error: ' + error.message)
  const handler = ERROR_HANDLERS[error.name] || ERROR_HANDLERS.DefaultError
  handler(response, error)

  next(error)
}
