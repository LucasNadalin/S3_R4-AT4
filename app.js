const express = require("express");
const app = express();
const PORT = 8084;
const fs = require("fs");

app.get("/usuarios", (req, res) => {
    try {
        const data = fs.readFileSync("./usuarios.json", "utf-8");;

        let usuarios = JSON.parse(data);

        res.status(200).json(usuarios);
    } catch (error) {
        console.error("Erro ao ler o arquivo JSON", error);
        res.status(500).json({ erro: "Erro interno do servidor ao processar a lista de usuarios!" });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em https://localhost:${PORT}`)
});