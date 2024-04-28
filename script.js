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
    let availCells = gameBoard().cell;
    const player=gameBoard().player;
    console.log(`Player ${player.starter? 'Two': 'One'}'s Turn` )
    
    // const starter= player.starter? 'playerTwo': 'playerOne'
    prompt('choose your cell')


}