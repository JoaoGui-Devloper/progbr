function novoAluno(nome, idade) {
    return {nome, idade}
};

let alunos = [
    novoAluno("Maria", 20),
    novoAluno("Igor", 19),
    novoAluno("João", 21),
    novoAluno("Erika", 35)
];

function idadeDosAlunos(total, aluno){
    return total + aluno.idade;
};

console.log(alunos.reduce(idadeDosAlunos, 0))