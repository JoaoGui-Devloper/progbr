let resultado = document.getElementById('resultado')

function calcular() {

    resultado.style.display = 'block';

    let adultos = document.getElementById('adultos').value;
    let criancas = document.getElementById('criancas').value;
    let duracao = document.getElementById('duracao').value;

    let resulCarne = calculoCarne(adultos, criancas, duracao);
    let resulCerveja = calculoCerveja(adultos, duracao);
    let resulBebidas = calculoBebidas(adultos, criancas, duracao);

    resultado.innerHTML = `<p>${resulCarne / 1000} Kg de carne</p>`
    resultado.innerHTML += `<p>${resulCerveja / 1000} L de cerveja</p>`
    resultado.innerHTML += `<p>${resulBebidas / 1000} L de bebidas</p>`
}

function calculoCarne(adultos, criancas, duracao) {

    return qtdCarne() * adultos + (qtdCarne() / 2 * criancas);

    function qtdCarne() {
        if (duracao <= 6) {
            return 400
        } else {
            return 650
        }
    }
}

function calculoCerveja(adultos, duracao) {

    return qtdCerveja() * adultos;

    function qtdCerveja() {
        if (duracao <= 6) {
            return 1200
        } else {
            return 2000
        }
    }
}

function calculoBebidas(adultos, criancas, duracao) {

    return qtdBebidas() * adultos + (qtdBebidas() / 2 * criancas);

    function qtdBebidas() {
        if (duracao <= 6) {
            return 1000
        } else {
            return 1500
        }
    }
}