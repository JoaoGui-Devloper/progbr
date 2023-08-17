let lista = document.getElementById("lista");

lista.dataset.num = 15

let num = Number(lista.dataset.num);

let conteudo = ''

for (let i = 1; i <= num; i++) {
    conteudo += '<li>' + i + '</li>';
}

lista.innerHTML = conteudo;