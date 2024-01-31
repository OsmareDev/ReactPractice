const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')

const api = supertest(app)
const User = require('../models/user')

const initialUsers = [
  {
    username: 'osmare',
    password: 'dev',
    active: true,
    date: new Date()
  },
  {
    username: 'test',
    password: 'test',
    active: true,
    date: new Date()
  }
]

beforeEach(async () => {
  await User.deleteMany({})

  const userObjects = initialUsers
    .map(user => new User(user))
  const promiseArray = userObjects
    .map(user => user.save())

  await Promise.all(promiseArray)
})

test('users are returned as json', async () => {
  await api
    .get('/api/users')
    .expect(200)
    .expect('Content-Type', /application\/json/)
})

test('all users are returned', async () => {
  const response = await api.get('/api/users')

  expect(response.body).toHaveLength(initialUsers.length)
})

test('a specific user is within the returned response', async () => {
  const response = await api.get('/api/users')

  const contents = response.body.map(r => r.username)
  expect(contents).toContain(
    'osmare'
  )
})

test('signin test', async () => {
  await api.post('/api/signin').send({
    username: 'a1',
    password: 'a2'
  })

  const response = await api.post('/api/login').send({
    username: 'a1',
    password: 'a2'
  })

  expect(response.body.username).toContain(
    'a1'
  )
})

test('cannot signin the same username', async () => {
  api.post('/api/signin', {
    username: 'osmare',
    password: 'a1234'
  }).expect(404)
})

test('login test', async () => {
  const response = await api.post('/api/login').send({
    username: 'osmare',
    password: 'dev'
  })

  expect(response.body.username).toContain(
    'osmare'
  )
})

afterAll(() => {
  mongoose.connection.close()
})
