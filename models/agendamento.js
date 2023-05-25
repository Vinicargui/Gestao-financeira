const mongoose = require("mongoose");

const agendamentoSchema = new mongoose.Schema({
  cliente: String,
  data: Date,
  funcionario: String,
  procedimento: String,
});

const Agendamento = mongoose.model("Agendamento", agendamentoSchema);

module.exports = Agendamento;
