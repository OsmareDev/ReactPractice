const loginRouter = require('express').Router()
const User = require('../models/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { TOKENKEY } = require('../utils/config')

loginRouter.post('/', async (request, response, next) => {
  const { body } = request
  const { username, password } = body

  const user = await User.findOne({ username, active: true })
  const passwordCheck = user === null
    ? false
    : await bcrypt.compare(password, user.password)

  if (!(user && passwordCheck)) {
    response.status(401).json('invalid user or password')
  }

  const infoToken = {
    username,
    id: user._id
  }

  const token = jwt.sign(infoToken, TOKENKEY, {
    expiresIn: 60 * 60 * 24 * 5 // seconds (5 days in total) that last the token
  })

  response.send({
    username,
    token
  })
})

module.exports = loginRouter
