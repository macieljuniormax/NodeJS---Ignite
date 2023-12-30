import http from "node:http";

const users = [];

const server = http.createServer(async (request, response) => {
  const { method, url } = request;
  const buffers = [];

  for await (const chunk of request) {
    buffers.push(chunk);
  }

  try {
    request.body = JSON.parse(Buffer.concat(buffers).toString());
  } catch (error) {
    request.body = null;
  }

  if (method === "GET" && url === "/users") {
    return response
      .setHeader("Content-Type", "application/json")
      .end(JSON.stringify(users));
  }

  if (method === "POST" && url === "/users") {
    const { name, email } = request.body;

    users.push({
      id: 1,
      name: name,
      email: email,
    });

    return response.writeHead(201).end();
    // O código 201 é retornado quando um novo recurso é criado
  }

  return response.writeHead(404).end();
  // O código 404 é retornado quando a rota não é encontrada
});

server.listen(3333);
