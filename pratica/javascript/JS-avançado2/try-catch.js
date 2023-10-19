let nome = ""

try {
    if (nome == "") {
        throw "O nome não pode ser vazio"
    }

    console.log(nome)
} catch (erro) {
    console.log("Houve um erro com nome", erro)
}

console.log("Boa Noite")

// O try catch serve para o tratamento de erros, se algo der errado dentro do try, passara pelo cacth se não, apenas o pulara.

// O trhow é como se fosse uma exceção, no exemplo acima, só daria um erro dentro do try se a variavel nome não fosse declarada ou fosse uma palavra reservada, a variavel ser vazia não contaria como erro, mas como não queria que a variavel fosse mostrada vazia cria-se uma exceção, se nome == "", será um erro e passara pelo catch. 