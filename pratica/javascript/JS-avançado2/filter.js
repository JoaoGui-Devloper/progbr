function novoAluno(nome, idade) {
    return {nome, idade}
};

let alunos = [
    novoAluno("Maria", 20),
    novoAluno("Igor", 19),
    novoAluno("João", 21),
    novoAluno("Erika", 35)
];

function menorQue25(aluno) {
    return aluno.idade < 25
};

console.log(alunos.filter(menorQue25));