var nomes = ["João","Maria","José"];
var notaA = [8, 5, 3];
var notaB = [10, 8, 4];

function media(n1, n2) {
    
    return (n1 + n2) / 2;

}

function passou(m) {

    if (m < 7) {
        return "Reprovado"
    } else {
        return "Aprovado"
    }

}

for (var index in nomes) {

    var n1 = notaA[index];
    var n2 = notaB[index];
    var m = media(n1, n2);


    console.log (`${nomes[index]} - ${n1} - ${n2} - ${m} - ${passou(m)}`);
}