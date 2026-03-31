const errorHandler = (err, req, res, next) => {
    console.log(`[ERRO] ${req.method} ${req.url}`, err.message);

    const status = err.status || 500;

    res.status(status).json({
        erro: 'Erro interno a=na Bilioteca' || err.message,
        caminho: req.url,
    });
};

module.exports = errorHandler;