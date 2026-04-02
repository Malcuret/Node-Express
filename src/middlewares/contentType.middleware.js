const validarContentType = (req, res, next) => {
    const metodosComBody = ['POST', 'PUT']; // Métodos HTTP que geralmente possuem corpo de requisição

    if (metodosComBody.includes(req.method)) {
        const contentType = req.headers['content-type']; // Obtém o header Content-Type da requisição

        if (!contentType || !contentType.includes('application.json')){
            return res.status(415).json({
                erro: 'Tipo de arquivo não suportado.',
            });
        };
    };
    next(); // Se o Content-Type for válido ou se o método não exigir um corpo, passa para o próximo middleware ou rota
};

module.exports = validarContentType;