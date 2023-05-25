const express = require("express");
const router = express.Router();
const Procedimento = require("../models/procedimento");

router.get("/procedimento", async (req, res) => {
  try {
    const procedimento = await Procedimento.find();
    res.json(procedimento);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// router.get("/funcionario/:id", async (req, res) => {
//   try {
//     const funcionario = await Funcionario.findById(req.params.id);
//     if (funcionario == null) {
//       return res.status(404).json({ message: "Funcionario não encontrado" });
//     }
//     res.json(funcionario);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

router.post("/procedimento", async (req, res) => {
  const procedimento = new Procedimento({
    nome: req.body.nome,
    valor: req.body.valor,
  });

  try {
    const newProcedimento = await procedimento.save();
    res.status(201).json(newProcedimento);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// router.put("/funcionario/:id", async (req, res) => {
//   try {
//     const atualizarFuncionario = await Funcionario.findOneAndUpdate(
//       { _id: req.params.id },
//       req.body,
//       { new: true }
//     );

//     if (!atualizarFuncionario) {
//       return res.status(404).json({ message: "Funcionario não encontrado" });
//     }

//     res.json(atualizarFuncionario);
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// });

// router.delete("/funcionario/:id", async (req, res) => {
//   try {
//     const cliente = await Funcionario.findById(req.params.id);
//     if (cliente == null) {
//       return res.status(404).json({ message: "Funcionario não encontrado" });
//     }

//     await funcionario.remove();
//     res.json({ message: "funcionario deletado com sucesso" });
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

module.exports = router;
