import http from "node:http";

const users = [];

const server = http.createServer((request, response) => {
  const { method, url } = request;

  if (method === "GET" && url === "/users") {
    return response
      .setHeader("Content-Type", "application/json")
      .end(JSON.stringify(users));
  }

  if (method === "POST" && url === "/users") {
    users.push({
      id: 1,
      name: "John Doe",
      email: "johndoe@email.com",
    });

    return response.writeHead(201).end();
    // O código 201 é retornado quando um novo recurso é criado
  }

  return response.writeHead(404).end();
  // O código 404 é retornado quando a rota não é encontrada
});

server.listen(3333);
