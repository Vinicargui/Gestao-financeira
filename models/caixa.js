const mongoose = require("mongoose");

const caixaSchema = new mongoose.Schema({
  faturamentos: [],
  mes: Date,
  despesas: [],
});

const Caixa = mongoose.model("Caixa", caixaSchema);

module.exports = Caixa;
