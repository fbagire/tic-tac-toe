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

function play() {
    const player = gameBoard().player;

    let availCells = gameBoard().cell;
    console.log(`Player ${player.starter ? 'Two' : 'One'}'s Turn`)

    let starter = player.starter ? true : false
    loop1:
    for (let index = 0; index < 9; index++) {

        // prompt('choose your cell')
        if (starter) {
            let play2 = prompt("Player 2: Choose")
            if (play2) {
                availCells[play2] = !availCells[play2] ? 'O' : console.log('space used');
                if (checkWinner(availCells, player) == 'Player Two wins!') {
                    break loop1
                }

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
                if (checkWinner(availCells, player) == 'Player One wins!') {
                    break loop1
                } starter = !starter

            }

            else {
                play1 = prompt("Player 1: Choose")

            }
        }
    }
    return { availCells }
}


function getPlayer(symbol) {
    const player = gameBoard().player;
    return symbol === player.playerOne ? 'Player One' : symbol === player.playerTwo ? 'Player Two ' : 'Unknown Player';
}


function checkWinner(board) {
    // Define winning conditions
    const winningConditions = [
        ['a1', 'a2', 'a3'],
        ['a4', 'a5', 'a6'],
        ['a7', 'a8', 'a9'],
        ['a1', 'a4', 'a7'],
        ['a2', 'a5', 'a8'],
        ['a3', 'a6', 'a9'],
        ['a1', 'a5', 'a9'],
        ['a3', 'a5', 'a7']
    ];

    // Check each winning condition
    for (const condition of winningConditions) {
        const [cell1, cell2, cell3] = condition;
        if (board[cell1] && board[cell1] === board[cell2] && board[cell2] === board[cell3]) {
            console.log(getPlayer(board[cell1]) + ' wins!');
            return getPlayer(board[cell1]) + ' wins!';
        }
    }
}

play();