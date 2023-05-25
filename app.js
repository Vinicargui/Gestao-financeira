const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const vendaControle = require("./Controles/vendaControle");
const agendamentoControle = require("./Controles/agendamentoControle");
const clienteControle = require("./Controles/clienteControle");
const procedimentoControle = require("./Controles/procedimentoControle");
const funcionarioControle = require("./Controles/funcionarioControle");
// const caixaControle = require("./Controles/caixaControle");

app.use(cors());
app.use(express.json());

mongoose
  .connect(
    "mongodb+srv://vinicius:fMZ11PkmfwvxrVQw@cluster0.2t8loaa.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => console.log("Conexão com o banco de dados estabelecida."))
  .catch((err) => {
    console.error("Erro ao conectar ao banco de dados:", err);
    process.exit(1);
  });

app.listen(3002, function () {
  console.log("servidor conectado!");
});

app.use("/", vendaControle);
app.use("/", agendamentoControle);
app.use("/", clienteControle);
app.use("/", procedimentoControle);
app.use("/", funcionarioControle);
// app.use("/", caixaControle);

//vinicius
//fMZ11PkmfwvxrVQw
// mongodb+srv://vinicius:<password>@cluster0.2t8loaa.mongodb.net/?retryWrites=true&w=majority
