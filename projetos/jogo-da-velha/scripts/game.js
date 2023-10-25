let board = ["", "", "", "", "", "", "", "", ""];
let playerTime = 0;
let symbols = ['O', 'X'];

function handleMove (position) {

    if (board[position] == '') {
        
    board[position] = symbols[playerTime];

    playerTime = (playerTime == 0) ? 1 : 0

    }
}