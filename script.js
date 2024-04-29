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
    console.log(`Player ${player.starter ? 'Two' : 'One'}'s Starts`)

    let starter = player.starter ? true : false

    const btnPlay = document.querySelectorAll('.btnPlay')


    const playMove = function (btn) {
        btn.textContent = starter ? 'X' : 'O';
        btn.disabled = true;
        availCells[btn.id] = starter ? 'X' : 'O';
        if (checkWinner(availCells, player)) {
            alert(checkWinner(availCells, player));
            return;
        }
        starter = !starter;
    };



    btnPlay.forEach(function (btn) {
        btn.addEventListener('click', function (event) {
            playMove(btn)
        })
    })


    return availCells
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

        else if (Object.values(board).length >= 9 && Object.values(board).every((item) => !item == '')) {
            return "It's a tie";
        }
    }
}


function screenBuild() {
    const board = gameBoard().cell
    const gamingZone = document.querySelector('.gamingZone')

    for (const arr of Object.keys(board)) {
        const btn = document.createElement('button')
        btn.setAttribute('id', arr)
        btn.setAttribute('class', 'btnPlay')
        btn.textContent = board[arr]
        gamingZone.appendChild(btn)
    }



}

screenBuild()
play()