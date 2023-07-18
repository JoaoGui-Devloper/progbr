// document.getElementById('h1').onclick = deixarMaiusculo
// document.getElementById('h2').onclick = deixarMaiusculo

// function deixarMaiusculo() {
//     this.innerHTML = this.innerHTML.toUpperCase()
// }

//-----------------------------------------------------------------

// let h1 = document.getElementById('h1');
// let h2 = document.getElementById('h2');

// h1.onclick = deixarMaiusculo;
// h2.onclick = deixarMaiusculo;

// function deixarMaiusculo() {
//     this.innerHTML = this.innerHTML.toUpperCase()
// }

//------------------------------------------------------------------

document.getElementById('h1').addEventListener('click', deixarMaiuscula);
document.getElementById('h2').addEventListener('click', deixarMaiuscula);

function deixarMaiuscula() {
    this.innerHTML = this.innerHTML.toUpperCase()
}