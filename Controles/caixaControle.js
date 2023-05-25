const express = require("express");
const router = express.Router();
const Caixa = require("./models/caixa");

router.get("/caixa", async (req, res) => {
  try {
    const caixas = await Caixa.find();
    res.status(200).json(caixas);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Erro ao obter caixa" });
  }
});

router.post("/caixa", async (req, res) => {
  const caixa = new Caixa({
    faturamentos: req.body.faturamentos,
    despesas: req.body.despesas,
    mes: req.body.mes,
  });

  try {
    const newCaixa = await caixa.save();
    res.status(201).json(newCaixa);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// router.get("/caixa/:mes", async (req, res) => {
//   try {
//     const mes = req.params.mes;
//     const caixa = await Caixa.findOne({ mes });
//     res.status(200).json(caixa);
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ message: "Erro ao obter caixa" });
//   }
// });

// router.put("/caixa/:mes", async (req, res) => {
//   try {
//     const mes = req.params.mes;
//     const caixa = await Caixa.findOneAndUpdate({ mes }, req.body, {
//       new: true,
//     });
//     res.status(200).json(caixa);
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ message: "Erro ao atualizar caixa" });
//   }
// });

// router.delete("/caixa/:mes", async (req, res) => {
//   try {
//     const mes = req.params.mes;
//     await Caixa.findOneAndDelete({ mes });
//     res.status(200).json({ message: "Caixa excluído com sucesso" });
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ message: "Erro ao excluir caixa" });
//   }
// });

module.exports = router;
