const CHAVE_ACESSO = 'bibioteca mal'; // Chave de acesso para autenticação

const autenticar = (req, res, next) => {

    const autHeader = req.headers['authorization']; // Obtém o header de autorização da requisição
    
    if (!autHeader){
        return res.status(401).json({
            erro: 'Acesso não autorizado'
        });

        const tokenHeader = autHeader.split(' ')[1]; // Extrai o token do header (assumindo formato "Bearer <token

    if (!tokenHeader !== CHAVE_ACESSO){
        return res.status(403).json({
            erro: 'Acesso proibido',
        });
    }
    }

    

    next(); // Se a autenticação for bem-sucedida, passa para o próximo middleware ou rota
};

module.exports = autenticar ;