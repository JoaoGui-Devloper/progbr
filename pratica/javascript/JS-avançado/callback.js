let usuarios = ["Maria", "João", "Igor"];

function inserirUsuario(nome, callback) {
    setTimeout(
       () => { 
        usuarios.push(nome)
        callback();
        }
        ,1000 
    )
};

function listarUsuario() {
    console.log(usuarios);
};

inserirUsuario("Erika", listarUsuario);

// function cadastrarUsuario(nome, callback) {
//     setTimeout(
//         function() {
//             usuarios.push(nome);
//             callback();
//         }
//         ,1000)
// };

// function listarUsuarios() {
//     console.log(usuarios); 
// };

// cadastrarUsuario("Erika", listarUsuarios);