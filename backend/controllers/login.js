const loginRouter = require('express').Router()
const User = require('../models/user')

loginRouter.post('/', (request, response, next) => {
  const { username, password } = request.body
  User.findOne({ username, password, active: true })
    .then(user => {
      if (user) {
        response.json(user)
      } else {
        response.status(404).end()
      }
    })
    .catch(error => next(error))
})

module.exports = loginRouter
