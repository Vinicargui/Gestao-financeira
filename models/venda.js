const mongoose = require("mongoose");

const vendaSchema = new mongoose.Schema({
  formaPagamento: String,
  valor: Number,
  data: Date,
  funcionario: String,
  cliente: String,
  procedimento: String,
});

const Venda = mongoose.model("Venda", vendaSchema);

module.exports = Venda;
