"use strict"
//ao usar o strict mode, se torna impossivel declarar variaveis globais pelas funções e outras coisas que já não funcionariam mostram erros para facilitar o entendimento na revisão do codigo

function tal() {
    simples = 51;
};

tal()
console.log(simples);