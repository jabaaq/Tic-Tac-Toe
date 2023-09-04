'use strict';

const GameBoard = (() => {

    let gameBoard = ['', '', '', '', '', '', '', '', '']

    const render = () => {
        let boardHTML = '';
        gameBoard.forEach((cell, index) => {
            boardHTML += `<div class='cell' id='square-${index}'>${cell}</div>`
        })
        document.querySelector('.grid-board').innerHTML = boardHTML
        s
    }
    return {
        render,
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
    let gameOVer;

    const start = () => {
        players = [
            cratePlayer(document.querySelector('#markX').value, 'X'),
            cratePlayer(document.querySelector('#markO').value, 'O')
        ]
        currentPlayerINdex = 0;
        gameOVer = false;
        GameBoard.render()
    }

    return {
        start,
    }
})()

const restartButton = document.querySelector('#restart')
restartButton.addEventListener('click', () => {
    Game.start()
})