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

// Retorna um array com todos os itens do array alunos que passaram pelo filtro, que no caso é ter menos de 25 anos.