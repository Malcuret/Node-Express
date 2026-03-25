const express = require('express');
const app = express();
const rotas = require("./src/routes/index.routes");
const logger = require('./src/middlewares/logger.middleware');

app.use(express.json());

rotas.use(logger)

// Registro das Rotas
app.use(rotas);

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Api rodando em http://localhost:${PORT}`);
});