// let tal = (x) => {
//     return (x * 2)
// }

// console.log(tal(2))

let tal = x => (x * 2)

console.log(tal(10))

// ao usar a arrow function que apenas retorna alguma coisa, posso omitir as chaves, a palavra reservada return, e até os parentesis do argumento (no caso o x acima) desde que seja apenas 1, 2 ou mais ainda é preciso usar o parentesis (x, y, z). Tornando o codigo mais facil de ler.

// -------------------------------------------------------------------

let dobro = () => {
    console.log(this.x)
}

let numero = {
    x: 2,
    d: dobro,
}

numero.d()

teste = dobro.bind(numero)
teste()

// A arrow function deixa o código mais fácil de entender mas o unico problema é que ela não entende como funciona o this e o bind não funciona nela.