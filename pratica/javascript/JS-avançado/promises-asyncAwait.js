let usuarios = ["João", "Maria", "Daniel"];

function inserirUsuarios(nome) {

    let promise = new Promise (function (resolve){

        setTimeout(() => {

            usuarios.push(nome);

            resolve();

        }, 1000);
    
    });
    
    return promise;
};

function listarUsuarios() {
    console.log(usuarios)
};

// inserirUsuarios("Igor").then(listarUsuarios);

async function executar() {
    await inserirUsuarios("Igor");
    listarUsuarios()
}
executar()