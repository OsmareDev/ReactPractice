const usersRouter = require('express').Router()
const User = require('../models/user')

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

usersRouter.delete('/:id', (request, response, next) => {
  User.findByIdAndDelete(request.params.id)
    .then(result => {
      response.status(204).end()
    })
    .catch(error => next(error))
})

module.exports = usersRouter
