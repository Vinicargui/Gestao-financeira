const express = require("express");
const router = express.Router();

const Venda = require("../models/venda");
const Caixa = require("../models/caixa");

router.get("/vendas", async (req, res) => {
  try {
    const vendas = await Venda.find();
    res.status(200).json(vendas);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Erro ao obter vendas" });
  }
});

router.post("/vendas", async (req, res) => {
  console.log(req.body);
  try {
    const novaVenda = new Venda(req.body);
    await novaVenda.save();

    // Adiciona a venda no caixa
    const mesAtual = new Date().toISOString().slice(0, 7);
    const caixa = await Caixa.findOne({ mes: mesAtual });

    if (caixa) {
      caixa.faturamentos.push(novaVenda.valor);
      await caixa.save();
    } else {
      const novoCaixa = new Caixa({
        faturamentos: [novaVenda.valor],
        mes: mesAtual,
      });
      await novoCaixa.save();
    }

    res.status(201).json(novaVenda);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Erro ao salvar venda" });
  }
});

module.exports = router;
