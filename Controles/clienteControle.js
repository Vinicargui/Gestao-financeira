const express = require("express");
const router = express.Router();
const Cliente = require("../models/cliente");

router.get("/clientes", async (req, res) => {
  try {
    const clientes = await Cliente.find();
    res.json(clientes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get("/clientes/:id", async (req, res) => {
  try {
    const cliente = await Cliente.findById(req.params.id);
    if (cliente == null) {
      return res.status(404).json({ message: "Cliente não encontrado" });
    }
    res.json(cliente);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post("/clientes", async (req, res) => {
  const cliente = new Cliente({
    nome: req.body.nome,
    telefone: req.body.telefone,
    redeSocial: req.body.redeSocial,
  });

  try {
    const newCliente = await cliente.save();
    res.status(201).json(newCliente);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.put("/clientes/:id", async (req, res) => {
  try {
    const atualizarCliente = await Cliente.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true }
    );

    if (!atualizarCliente) {
      return res.status(404).json({ message: "Cliente não encontrado" });
    }

    res.json(atualizarCliente);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.delete("/clientes/:id", async (req, res) => {
  try {
    const cliente = await Cliente.findById(req.params.id);
    if (cliente == null) {
      return res.status(404).json({ message: "Cliente não encontrado" });
    }

    await cliente.remove();
    res.json({ message: "Cliente deletado com sucesso" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;

// const Router = require("express").Router();
// const Cliente = require("../models/cliente");

// Router.post("/", async (req, res) => {
//   try {
//     const { nome, telefone, redeSocial } = req.body;

//   } catch (error) {
//     console.log(error);
//   }
// });
