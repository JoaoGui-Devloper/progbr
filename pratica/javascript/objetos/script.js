function calcMedia() {
    return (this.notas[0] + this.notas[1]) / 2
}

var aluno1 = {
    nome: "João",
    notas: [9, 10],

    media: calcMedia
}

var aluno2 = {
    nome: "Igor",
    notas: [9, 7],

    media: calcMedia
}

console.log(aluno1.nome)
console.log(aluno1.media())

console.log(aluno2.nome)
console.log(aluno2.media())