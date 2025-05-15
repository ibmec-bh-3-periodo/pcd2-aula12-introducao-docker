"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const cors = require("cors");
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const app = express();
const PORT = 3000;
// Middleware
app.use(cors());
app.use(express.json());
app.post("/contato", (req, res) => {
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
    const filePath = path_1.default.join(__dirname, "data", "messages.json");
    // Lê o arquivo e adiciona a nova mensagem
    fs_1.default.readFile(filePath, "utf8", (err, data) => {
        let mensagens = [];
        if (!err && data) {
            try {
                mensagens = JSON.parse(data);
            }
            catch (parseError) {
                console.error("Erro ao fazer parse do JSON:", parseError);
            }
        }
        mensagens.push(novaMensagem);
        fs_1.default.writeFile(filePath, JSON.stringify(mensagens, null, 2), (err) => {
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
// Rota GET para buscar mensagens
app.get("/mensagens", (req, res) => {
    const filePath = path_1.default.join(__dirname, "data", "messages.json");
    // Verifica se o arquivo existe
    fs_1.default.access(filePath, fs_1.default.constants.F_OK, (err) => {
        if (err) {
            // Se o arquivo não existir, retorna array vazio
            return res.json([]);
        }
        // Lê o arquivo e retorna as mensagens
        fs_1.default.readFile(filePath, "utf8", (err, data) => {
            if (err) {
                console.error("Erro ao ler o arquivo:", err);
                return res.status(500).json({ erro: "Erro ao ler mensagens." });
            }
            try {
                const mensagens = JSON.parse(data);
                // Retorna as mensagens em ordem cronológica inversa (mais recentes primeiro)
                return res.json(mensagens.reverse());
            }
            catch (parseError) {
                console.error("Erro ao fazer parse do JSON:", parseError);
                return res.status(500).json({ erro: "Erro ao processar mensagens." });
            }
        });
    });
});
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
