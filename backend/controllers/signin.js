const signinRouter = require('express').Router()
const User = require('../models/user')
const logger = require('../utils/logger')
const bcrypt = require('bcrypt')

signinRouter.post('/', (request, response, next) => {
  logger.info('will try to create user')
  const { username, password } = request.body

  if (username === undefined || password === undefined) {
    return response.status(400).json({ error: 'content missing' })
  }

  User.findOne({ username, active: true }).then(async user => {
    if (user) {
      logger.info('there is a user by that username')
      return response.status(404).end()
    }

    const saltRounds = 10
    const hashedPassword = await bcrypt.hash(password, saltRounds)

    const newUser = new User({
      username,
      password: hashedPassword,
      active: true,
      date: new Date()
    })

    newUser.save().then(savedUser => {
      logger.info('created user')
      response.json(savedUser)
    })
  }).catch(error => next(error))
})

module.exports = signinRouter
