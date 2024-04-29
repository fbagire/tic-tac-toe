function gameBoard() {
    let cell = {};
    for (let bx = 1; bx < 10; bx++) {
        cell['a' + bx] = '';
    }

    const player = { playerOne: 'X', playerTwo: 'O', starter: Math.round(Math.random()) }

    const cellStatus = function (cellID) {
        return cellID ? true : false
    }

    return { cell, player, cellStatus }
}
const player = gameBoard().player;

function play() {
    let availCells = gameBoard().cell;
    console.log(`Player ${player.starter ? 'Two' : 'One'}'s Turn`)

    let starter = player.starter ? true : false
    for (let index = 0; index < 9; index++) {

        // prompt('choose your cell')
        if (starter) {
            let play2 = prompt("Player 2: Choose")
            if (play2) {
                availCells[play2] = !availCells[play2] ? 'O' : console.log('space used');
                starter = !starter

            }
            else {
                play2 = prompt("Player 2: Choose")

            }
        }
        else {
            let play1 = prompt("Player 1: Choose")
            if (play1) {
                availCells[play1] = !availCells[play1] ? 'X' : console.log('space used')
                starter = !starter

            }

            else {
                play1 = prompt("Player 1: Choose")

            }
        }
    }
    return { availCells }
}


function getPlayer(symbol) {
    return symbol === player.playerOne ? 'Player One' : symbol === player.playerTwo ? 'Player Two' : 'Unknown Player';
}
function checkWinner(board, player) {





    if (board['a1'] == board['a2'] == board['a3']) {
        return getPlayer(board['a1'])
    }
    else if (board['a4'] == board['a5'] == board['a6']) {
        return getPlayer(board['a1'])
    }
    else if (board['a7'] == board['a8'] == board['a9']) {
        return getPlayer(board['a7'])
    }
    else if (board['a1'] == board['a4'] == board['a7']) {
        return getPlayer(board['a1'])
    }
    else if (board['a2'] == board['a5'] == board['a8']) {
        return getPlayer(board['a2'])
    }
    else if (board['a3'] == board['a6'] == board['a9']) {
        return getPlayer(board['a3'])
    }
    else if (board['a1'] == board['a5'] == board['a9']) {
       return getPlayer(board['a1'])
    }
    else if (board['a3'] == board['a5'] == board['a7']) {
        return getPlayer(board['a3'])
    }


}
