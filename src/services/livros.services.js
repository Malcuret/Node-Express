const acervo = [
    {
        id: 67,
        titulo: "O matador de ratos",
        autor: "Lucas Pimentel",
        disponivel: true,
    },
    {
        id: 2,
        titulo: "Bibliografia de Bolsonaro",
        autor: "Lula Inacio da Silva",
        disponivel: false,
    },
    {
        id: 3,
        titulo: "A volta dos que Não Foram",
        autor: "Yoran Hansel",
        disponivel: true,
    },
]

//Listar todos os livros
const listaTodosLivros = async () => {
    return acervo;
};

//Buscar livro por id
const buscarLivroPorID = async id => {
    const livro = acervo.find((item  => item.id === Number(id)));
    return livro || null;
};

module.exports = {listaTodosLivros, buscarLivroPorID};