let alunoA = {nome: "João", idade: 21}

let alunoB = {...alunoA}

alunoB.idade = 35



let turmaA = ["Igor", "Erika", "Maria"]

let turmaB = ["Natalia", "Ana", "Carlos"]

let aluno = [...turmaA, ...turmaB]

aluno.push("Daniel")