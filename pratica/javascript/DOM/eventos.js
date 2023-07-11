// let t = document.getElementById('titulo');

document.getElementById('titulo').addEventListener('click', mudarText)

function mudarText() {
    this.innerText = 'alo';
}