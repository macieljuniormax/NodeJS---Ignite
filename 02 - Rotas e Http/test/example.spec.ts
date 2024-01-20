import { expect, test, beforeAll, afterAll } from 'vitest'
import { createServer } from 'node:http'
import { app } from '../src/app'
import request from 'supertest'

beforeAll(async () => {
  await app.ready()
})

afterAll(async () => {
  await app.close()
})

test('user can create a new transaction', async () => {
  const response = await request(app.server).post('/transactions').send({
    title: 'New Transaction',
    amount: 5000,
    type: 'credit'
  })

  expect(response.statusCode).toEqual(201)
})
