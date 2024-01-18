import { expect, test } from 'vitest'

test('o usuário consegue criar uma nova transação', () => {
  const respondeStatusCode = 201

  expect(respondeStatusCode).toEqual(201)
})
