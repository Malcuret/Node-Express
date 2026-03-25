const express = require('express');
const app = express();

app.use(express.json());

// Registro das Rotas
app.use('/usuarios', require('./src/routes/usuarios.routes'));
app.use('/livros', require('./src/routes/livros.routes'));

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Api rodando em http://localhost:${PORT}`);
});