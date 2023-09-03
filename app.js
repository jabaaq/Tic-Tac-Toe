'use strict';

const GameBoard = (() => {
    let board = document.querySelector('.board-grid')
    let boardArr = ['', '', '', '', '', '', '', '', ''];

    const render = () => {
        let boardHTML = '';
        boardArr.forEach((square, index) => {

            boardHTML += `<div class="cell" id='square-${index}'>${square}</div>`
        })
        board.innerHTML = boardHTML;
    }


    return {
        render,
    }
})();


const createPlayers = ((name, mark) => {

})();
document.querySelector('#charX').addEventListener('click', GameBoard.render)


