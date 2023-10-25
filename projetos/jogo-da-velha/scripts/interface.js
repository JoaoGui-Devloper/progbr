document.addEventListener('DOMContentLoaded', () => {

    let squares = document.querySelectorAll('.square');

    squares.forEach((square) => {
        square.addEventListener('click', handleClick);
    });

});

function handleClick (event) {

    let square = (event.target);
    let position = square.id;

    handleMove(position);
    uptadeSquares();

};

function uptadeSquares() {

    let squares = document.querySelectorAll('.square');

    squares.forEach((square) => {

        let position = square.id;
        let sybols = board[position];

        if (sybols != '') {
            square.innerHTML = `<div class="${sybols}"></div>`
        }

    });

} 