function novoAluno(nome, idade) {
    return {nome, idade}
};

let alunos = [
    novoAluno("Maria", 20),
    novoAluno("Igor", 19),
    novoAluno("João", 21),
    novoAluno("Erika", 35)
];

function alunoDaqui5anos(aluno) {
    return {
        nome: aluno.nome,
        idade: aluno.idade + 5
    }
}

console.log(alunos.map(alunoDaqui5anos))