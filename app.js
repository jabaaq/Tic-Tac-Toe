'use strict';

const displayController = (() => {
    const renderMessage = (message) => {
        document.querySelector('.round-message').innerHTML = message
        message.style.textShadow = `3px 4px 9px rgba(0,0,0,0.34)`
    }
    return {
        renderMessage
    }
})()

const GameBoard = (() => {

    let gameBoard = ['', '', '', '', '', '', '', '', '']

    const render = () => {
        let boardHTML = '';
        gameBoard.forEach((cell, index) => {
            boardHTML += `<div class='cell' id='square-${index}'>${cell}</div>`
        })

        document.querySelector('.grid-board').innerHTML = boardHTML
        const squares = document.querySelectorAll('.cell')
        squares.forEach((square) => {
            square.addEventListener('click', Game.handleClick)
            if (square.innerHTML === 'X') {
                square.style.color = '#e25041'
            } else if (square.innerHTML === 'O') {
                square.style.color = '#1abc9c'
            }
            square.style.textShadow = `2px 3px 7px rgba(0,0,0,0.34)`
        })
    }

    const update = (index, value) => {
        gameBoard[index] = value
        render()
    }

    const getGameboard = () => gameBoard

    return {
        render,
        update,
        getGameboard,
    }

})();

const cratePlayer = (name, mark) => {
    return {
        name,
        mark,
    }
}

const Game = (() => {
    let players = []
    let currentPlayerINdex;
    let gameOver;

    const start = () => {
        players = [
            cratePlayer('X', 'X'),
            cratePlayer('O', 'O')
        ]
        currentPlayerINdex = 0;
        gameOver = false;
        GameBoard.render()
    }

    const handleClick = (event) => {
        if (gameOver) {
            return
        }
        let index = parseInt((event.target.id).split('-')[1])

        //To check where is was clicked and which symbol is gonna used

        if (GameBoard.getGameboard()[index] !== '') {
            return
        }
        GameBoard.update(index, players[currentPlayerINdex].mark)

        if (checkForWin(GameBoard.getGameboard(), players[currentPlayerINdex].mark)) {
            gameOver = true
            displayController.renderMessage(`${players[currentPlayerINdex].mark} Won !`)
        } else if (checkForTie(GameBoard.getGameboard())) {
            gameOver = true
            displayController.renderMessage(`It's a tie!`)
        }
        currentPlayerINdex = currentPlayerINdex === 0 ? 1 : 0
    }

    const restart = () => {
        for (let i = 0; i < 9; i++) {
            GameBoard.update(i, '')
        }
        GameBoard.render();
        gameOver = false
        document.querySelector('.round-message').innerHTML = '';
    }

    return {
        start,
        handleClick,
        restart,
    }
})()

// Winnings check

function checkForWin(board) {
    const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]
    for (let i = 0; i < winningCombinations.length; i++) {
        const [a, b, c] = winningCombinations[i];

        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            return true
        }
    }
    return false
}

function checkForTie(board) {
    return board.every(cell => cell !== '')
}

// To restart the game
const startButton = document.querySelector('#startGame')
startButton.addEventListener('click', () => {
    Game.start()
})

//To start the game
const restartButton = document.querySelector('#restart')
restartButton.addEventListener('click', () => {
    Game.restart()
})

