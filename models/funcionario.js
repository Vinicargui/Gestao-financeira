const mongoose = require("mongoose");

const funcionarioSchema = new mongoose.Schema({
  nome: String,
  cargo: String,
  telefone: String,
});

const Funcionario = mongoose.model("Funcionario", funcionarioSchema);

module.exports = Funcionario;
