const usersRouter = require('express').Router()
const User = require('../models/user')
const userExtractor = require('../middleware/userExtractor')

usersRouter.get('/', (request, response) => {
  User.find({}).then(users => {
    response.json(users)
  })
})

usersRouter.get('/:id', (request, response, next) => {
  User.findById(request.params.id)
    .then(user => {
      if (user) response.json(user)

      response.status(404).end()
    })
    .catch(error => next(error))
})

usersRouter.delete('/:id', userExtractor, (request, response, next) => {
  User.findByIdAndDelete(request.userId)
    .then(result => {
      response.status(204).end()
    })
    .catch(error => next(error))
})

module.exports = usersRouter
