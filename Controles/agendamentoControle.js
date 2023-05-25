const router = require("express").Router();
const Agendamento = require("../models/agendamento");

router.get("/agenda", async (req, res) => {
  try {
    const agendamento = await Agendamento.find();
    res.json(agendamento);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post("/agenda", async (req, res) => {
  const { cliente, data, funcionario, procedimento } = req.body;

  const agendamento = {
    cliente,
    data,
    funcionario,
    procedimento,
  };

  try {
    const novoAgendamento = new Agendamento(agendamento);
    await novoAgendamento.save();
    res.status(201).json({ message: "Cadastrado com Sucesso!" });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
