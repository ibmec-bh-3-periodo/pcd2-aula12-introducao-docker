const express = require("express");
const cors = require("cors");

import { Request, Response } from "express";
import fs from "fs";
import path from "path";

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

app.post("/contato", (req: Request, res: Response) => {
  const { nome, email, mensagem } = req.body;

  if (!nome || !email || !mensagem) {
    return res.status(400).json({ erro: "Preencha todos os campos." });
  }

  const novaMensagem = {
    nome,
    email,
    mensagem,
    data: new Date().toISOString(),
  };

  const filePath = path.join(__dirname, "data", "messages.json");

  // Lê o arquivo e adiciona a nova mensagem
  fs.readFile(filePath, "utf8", (err, data) => {
    let mensagens = [];

    if (!err && data) {
      try {
        mensagens = JSON.parse(data);
      } catch (parseError) {
        console.error("Erro ao fazer parse do JSON:", parseError);
      }
    }

    mensagens.push(novaMensagem);

    fs.writeFile(filePath, JSON.stringify(mensagens, null, 2), (err) => {
      if (err) {
        console.error("Erro ao escrever o arquivo:", err);
        return res.status(500).json({ erro: "Erro ao salvar a mensagem." });
      }

      console.log("Mensagem salva:", novaMensagem);
      return res
        .status(200)
        .json({ mensagem: "Recebido e salvo com sucesso." });
    });
  });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
