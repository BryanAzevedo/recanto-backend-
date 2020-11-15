const connection = require("../database/connection");

module.exports = {
  async index(resquest, response) {
    const hospedes = await connection("hospedes").select("*");
    const [count] = await connection("hospedes").count();

    response.header("X-Total-Count", count["count(*)"]);
    return response.json(hospedes);
  },

  async create(request, response) {
    const { name, email, cpf, cidade, estado, senha } = request.body;

    await connection("hospedes").insert({
      name,
      email,
      cpf,
      cidade,
      estado,
      senha,
    });

    return response.json({ name });
  },
};
