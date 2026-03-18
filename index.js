const express = require('express');

const livrosRoutes = require ('./src/routes/livros.routes');

const app = express();

app.use(express.json());

// Registro das Rotas
app.use('/livros', livrosRoutes);

app.use('/', (req, res) => {
    res.json({
        sistema:'Biblioteca M4',
        status: 'Online'
    });
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Api rodando em http://localhost:${PORT}`);
});