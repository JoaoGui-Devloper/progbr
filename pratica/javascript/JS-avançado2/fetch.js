let url = "https://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL";

function calcular() {
    let botaoText = document.getElementById('botaoText').value;
    let H1 = document.getElementById('Resposta');

    fetch(url)
    .then(function (res) {
        return res.json();
    })
    .then(function (data) {
        let valorUSD = (data.USDBRL.high);
        let valor = (Number(valorUSD));

        let total = botaoText * valor;

        let totalFinal = total.toFixed(2);
        H1.innerHTML = totalFinal.toString().replace(".", ",") + " Dólares"
    });
}

