function criarAluno(nome, n1, n2) {
    return {
        nome: nome,
        nota1: n1,
        nota2: n2,

        media: function () {
            return (this.nota1 + this.nota2) / 2;
        }
    }
}

var alunos = [
    criarAluno("João", 8, 9),
    criarAluno("Igor", 6, 9.5),
    criarAluno("Mario", 4, 7.5)
]

for (var aluno of alunos) {
    console.log(`${aluno.nome} - ${aluno.media()}`)
}