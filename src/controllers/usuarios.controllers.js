const usuariosService = require('../services/usuarios.services');

// Get usuarios
const listarUsuarios = async (req, res) => {
    try{
        const usuarios = await usuariosService.listaTodosUsuarios();
        res.status(200).json({total: usuarios.length, usuarios});
    } catch (error){
        res.status(500).json({erro: 'Erro interno ao buscar os usuarios'})
    }
};
// Get /usuarios/:id
const buscarUsuarioPorID = async (req, res) => {
    try{
        // Extrai o parametro da URL - essa é a responsabilidade do controller, o service não tem acesso a req e res
        const {id} = req.params;
        const usuario = await usuariosService.buscarUsuarioPorID(id);

        // Se o service retornar null, significa que o usuario não foi encontrado, então retornamos um 404
        if (!usuario) {
            return res
            .status(404)
            .json({erro: `Usuario com id ${id} não encontrado`});
        }

        res.status(200).json(usuario);

    } catch (error){
        res.status(500).json({erro: 'Erro interno ao buscar os usuarios'})
    }
};

module.exports = {listarUsuarios, buscarUsuarioPorID};
