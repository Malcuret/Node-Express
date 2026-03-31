const express = require('express');

const router = express.Router();
const livrosRoutes = require('./livros.routes');
const usuariosRoutes = require('./usuarios.routes');
const {autenticar} = require('../middlewares/auth.middleware')

router.use(autenticar);

// 1. Rotas de recursos (Coloque SEMPRE antes do 404)
router.use('/livros', livrosRoutes);
router.use('/usuarios', usuariosRoutes);

// 2. Rota raiz
router.get('/', (req, res) => {
    res.status(200).json({mensagem: 'Bem-vindo à API de Livros e Usuarios'});
});

// 3. Rota 404 (A ultima linha deste arquivo)
router.use((req, res) => {
    res.status(404).json({erro: 'Rota não encontrada'});
});

module.exports = router;