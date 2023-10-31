let board = ["", "", "", "", "", "", "", "", ""];
let playerTime = 0;
let symbols = ['O', 'X'];
let gameOver = false;

function handleMove (position) {

    if (gameOver) {
        return;
    };

    if (board[position] == '') {
        
    board[position] = symbols[playerTime];

    gameOver = isWin();

    playerTime = (playerTime == 0) ? 1 : 0

    }
}

function isWin() {
    
}