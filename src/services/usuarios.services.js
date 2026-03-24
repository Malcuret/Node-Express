const usuarios = [
    {
        id: 67,
        nome: "Enzo",
        Email: "enzo67@gmail.com",
    },
    {
        id: 2,
        nome: "Lulinha",
        Email: "lulinha@gmail.com",
    },
    {
        id: 3,
        nome: "ManoelGomes",
        Email: "manoelgomes@gmail.com",
    },
]

//Listar todos os Usuarios
const listaTodosUsuarios = async () => {
    return usuarios;
};

//Buscar usuario por id
const buscarUsuarioPorID = async id => {
    const usuario = usuarios.find((user) => user.id === Number(id));
    return usuario || null;
};

const CriarUsuario = async (nome, email) => {
    if (!nome || !email) {
        throw new Error("Nome e email são obrigatórios");
    }
    const novoUsuario = {
        id: usuarios.length + 1,
        nome,
        email,
    };
    usuarios.push(novoUsuario);
    return novoUsuario;
    };

module.exports = {listaTodosUsuarios, buscarUsuarioPorID, CriarUsuario};