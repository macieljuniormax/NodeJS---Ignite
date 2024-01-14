import fastify from 'fastify'
import { knex } from './database'
import crypto from 'node:crypto'

const app = fastify()

app.get('/hello', async () => {
  const transactions = await knex('transactions')
    .select('*')
    .where('amount', 500)

  return transactions
})

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('HTTP Server Running')
  })
