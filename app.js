const express = require("express");
const app = express();
const PORT = 8085;
const fs = require("fs");

app.get("/eventos", (req, res) => {
    try {
        const data = fs.readFileSync("./eventos.json", "utf-8");;

        let eventos = JSON.parse(data);

        const {dataEvento} = req.query;

         if (dataEvento) {
            eventos = eventos.filter(evento => evento.data == dataEvento);
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