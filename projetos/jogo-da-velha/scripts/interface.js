document.addEventListener('DOMContentLoaded', () => {

    let squares = document.querySelectorAll('.square');

    squares.forEach((square) => {
        square.addEventListener('click', handleClick);
    });

});

let button = document.getElementById('botao');
button.addEventListener('click', endGame);

function endGame() {
    resetGame();
    updateSquares();
}

function handleClick (event) {

    let square = (event.target);
    let position = square.id;

    if (handleMove(position)) {
        setTimeout ( () => {
            alert(`O jogador ${symbols[playerTime]} foi o vencedor`)
            resetGame();
            updateSquares();
        }, 50 );

    };
    updateSquares();
};

function updateSquares() {

    let squares = document.querySelectorAll('.square');

    squares.forEach((square) => {

        let position = square.id;
        let sybols = board[position];

        square.innerHTML = `<div class="${sybols}"></div>`

    });

};