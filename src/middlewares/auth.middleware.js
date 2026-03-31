const CHAVE_ACESSO = 'Biblioteca-ralph-teddy'; // Chave de acesso para autenticação

const autenticar = (req, res, next) => {
    const autHeader = req.headers['authorization']; // Obtém o header de autorização da requisição
    const autBody = req.body['authorization']; // Obtém o campo de autorização do corpo da requisição (se necessário)
    
    if (!autHeader){
        return res.status(401).json({
            erro: 'Acesso não autorizado'
        });
    }

    if (!autBody){
        return res.status(401).json({
            erro: 'Acesso não autorizado'
        });
    }
    const tokenBody = autBody.split(' ')[1]; // Extrai o token do campo de autorização do corpo da requisição
    const tokenHeader = autHeader.split(' ')[1]; // Extrai o token do header de autorização
    
    if (!tokenHeader !== CHAVE_ACESSO){
        return res.status(403).json({
            erro: 'Acesso proibido',
        });
    }
    if (!tokenBody !== CHAVE_ACESSO){
        return res.status(403).json({
            erro: 'Acesso proibido',
        });
    }

    next(); // Se a autenticação for bem-sucedida, passa para o próximo middleware ou rota
};

module.exports = { autenticar };