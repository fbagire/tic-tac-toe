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
    let starter = player.starter ? true : false
    starter ? (player2.style.backgroundColor = 'rgb(27, 190, 190)', player1.style.backgroundColor = '') : (player1.style.backgroundColor = 'rgb(27, 190, 190)', player2.style.backgroundColor = '')

    const btnPlay = document.querySelectorAll('.btnPlay')
    const resbtn = document.querySelector('#resbtn')
    const resetFunc = function () {
        btnPlay.forEach(function (btn) {
            btn.textContent = ''
            btn.disabled = false;
        })

        availCells = {}
    }

    const playMove = function (btn) {
        const player1 = document.querySelector('#player1')
        const player2 = document.querySelector('#player2')



        btn.textContent = starter ? 'O' : 'X';
        btn.disabled = true;
        availCells[btn.id] = starter ? 'O' : 'X';
        if (checkWinner(availCells)) {
            setTimeout(() => {
                alert(checkWinner(availCells));
                resetFunc()
            }

                , 1);
        }
        starter = !starter;
        starter ? (player2.style.backgroundColor = 'rgb(27, 190, 190)', player1.style.backgroundColor = '') : (player1.style.backgroundColor = 'rgb(27, 190, 190)', player2.style.backgroundColor = '')

    };



    btnPlay.forEach(function (btn) {
        btn.addEventListener('click', function (event) {
            playMove(btn)
        })
    });

    resbtn.addEventListener('click', resetFunc)

    return { availCells, btnPlay }
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
            // console.log(getPlayer(board[cell1]) + ' wins!');
            return getPlayer(board[cell1]) + ' wins!';
        }

        else if (Object.values(board).length >= 9 && Object.values(board).every((item) => !item == '')) {
            return "It's a tie";

        }
    }
}


function screenBuild() {

    const board = gameBoard().cell;
    const gamingButtons = document.querySelector('.gamingButtons');
    const gamingZone = document.querySelector('.gamingZone')
    const header = document.querySelector('.header');
    const phead = document.createElement('p');
    const phead2 = document.createElement('p');
    const player1 = document.createElement('p');
    const player2 = document.createElement('p');



    player1.setAttribute('id', 'player1');
    player2.setAttribute('id', 'player2');
    player1.textContent = `Player ${gameBoard().player.playerOne == 'X' ? '1' : '2'}: ${gameBoard().player.playerOne} `
    player2.textContent = `Player ${gameBoard().player.playerTwo == 'O' ? '2' : '1'}: ${gameBoard().player.playerTwo} `

    gamingZone.appendChild(player1)
    gamingZone.appendChild(player2)

    phead.textContent = 'Tic-Tac-Toe, JS learning';
    phead2.innerHTML = '<span>New to this game?<a href="https://en.wikipedia.org/wiki/Tic-tac-toe">Learn more</a></span>';

    header.appendChild(phead)
    header.appendChild(phead2)

    for (const arr of Object.keys(board)) {
        const btn = document.createElement('button')
        btn.setAttribute('id', arr)
        btn.setAttribute('class', 'btnPlay')
        btn.textContent = board[arr]
        gamingButtons.appendChild(btn)
    }
    const resbtn = document.createElement('button')
    resbtn.textContent = 'Reset';
    resbtn.setAttribute('id', 'resbtn')
    document.querySelector('.footer').appendChild(resbtn);

    return resbtn
}
screenBuild()
play()

