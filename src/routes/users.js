export default async function userRoutes(fastify, options) {
  // Simulando um banco de dados (Array)
  let users = [];

  // ✅ Rota GET - Listar todos os usuários
  fastify.get("/users", async (request, reply) => {
    return { users };
  });

  // ✅ Rota GET - Buscar um usuário por ID
  fastify.get("/users/:id", async (request, reply) => {
    const { id } = request.params;
    const user = users.filter((u) => u.id === id);

    if (!user) {
      return reply.status(404).send({ error: "Usuário não encontrado" });
    }
    return { user };
  });

  // ✅ Rota POST - Criar um novo usuário
  fastify.post("/users", async (request, reply) => {
    const { id, name, email } = request.body;

    if (!id || !name || !email) {
      return reply
        .status(400)
        .send({ error: "ID, Nome e Email são obrigatórios" });
    }
    users.push({ id, name, email });

    return reply
      .status(201)
      .send({ message: "Usuário criado", user: { id, name, email } });
  });

  // ✅ Rota PUT - Atualizar um usuário por ID
  fastify.put("/users/:id", async (request, reply) => {
    const { id } = request.params;
    const { name, email } = request.body;

    let user = users.find((u) => u.id === id);

    if (!user) {
      return reply.status(404).send({ error: "Usuário não encontrado" });
    }

    user.name = name || user.name;
    user.email = email || user.email;

    return { message: "Usuário atualizado!", user };
  });

  // ✅ Rota DELETE - Remover um usuário por ID
  fastify.delete("/users/:id", async (request, reply) => {
    const { id } = request.params;
    const index = users.findIndex((u) => u.id === id);

    if (index === -1) {
      return reply.status(404).send({ error: "Usuário não encontrado" });
    }

    users.splice(index, 1);

    return { message: `Usuário com ID ${id} foi deletado` };
  });
}
