const livrosService = require('../services/livros.services');

// Get livros
const listarLivros = async (req, res) => {
    try{
        const livros = await livrosService.listaTodosLivros();
        res.status(200).json({total: livros.length, livros});
    } catch (error){
        res.status(500).json({erro: 'Erro interno ao buscar os livros'})
    }
};

const buscarLivrosPorID = async (req, res) => {
    try{
        const livros = await livrosService.buscarLivroPorID(req.params.id);
        res.status(200).json({total: livros.length, livros});
    } catch (error){
        res.status(500).json({erro: 'Erro interno ao buscar o livro'})
    }
}

const criarLivro = async (req, res) => {
    try {
        // Extrai os dados do corpo da requisição - essa é a responsabilidade do controller, o service não tem acesso a req e res
        const {titulo, autor} = req.body;
        const novoLivro = await livrosService.criarLivro(titulo, autor);

        // 201 = Created - Status correto para indicar que um recurso foi criado com sucesso
        res.status(201).json({
            mensagem: 'Livro criado com sucesso',
            livro: novoLivro,
        })
    } catch
     (error) {
        // Se o service lançou um erro de validação, retornamos um 400 Bad Request com a mensagem de erro
        res.status(400).json({erro: error.message});
     }
}


module.exports = {listarLivros, buscarLivrosPorID, criarLivro};