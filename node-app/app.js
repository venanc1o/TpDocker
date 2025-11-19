const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("Servidor Node funcionando! ");
});

app.listen(port, "0.0.0.0", () => {
    console.log(`Servidor rodando na porta ${port}`);
});
