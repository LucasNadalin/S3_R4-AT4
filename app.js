const express = require("express");
const app = express();
const PORT = 8085;
const fs = require("fs");

app.get("/eventos", (req, res) => {
    try {
        const dados = fs.readFileSync("./eventos.json", "utf-8");;

        let eventos = JSON.parse(dados);

        const {data} = req.query;

         if (data) {
            eventos = eventos.filter(evento => evento.data == data);
        };

        res.status(200).json(eventos);
    } catch (error) {
        console.error("Erro ao ler o arquivo JSON", error);
        res.status(500).json({ erro: "Erro interno do servidor ao processar a lista de eventos!" });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em https://localhost:${PORT}`)
});