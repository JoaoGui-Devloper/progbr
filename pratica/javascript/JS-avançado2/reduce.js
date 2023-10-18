// function novoAluno(nome, idade) {
//     return {nome, idade}
// };

// let alunos = [
//     novoAluno("Maria", 20),
//     novoAluno("Igor", 19),
//     novoAluno("João", 21),
//     novoAluno("Erika", 35)
// ];

// function idadeDosAlunos(total, aluno){
//     return total + aluno.idade;
// };

// console.log(alunos.reduce(idadeDosAlunos, 0))

function novoAluno(nome, nota1) {
    return {nome, nota1}
}

let alunos = [
    novoAluno("João", 10),
    novoAluno("Igor", 10),
    novoAluno("Igor", 1)
]

function mediaDosAlunos(total, aluno) {
    return total + aluno.nota1 / alunos.length
}

console.log(alunos.reduce(mediaDosAlunos, 0))

// o reduce pega todo o array e transforma em um único resultado.