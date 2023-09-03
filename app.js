'use strict';

const gameBoard = (() => {

    const render = () => {
        let boarHTML = document.querySelector('.main-container').innerHTML = `
        <div class="main-board">
        <div class="control-btns">
        <button role="button" class="button-name" id="markX" value="X">X</button>
        <button role="button" class="button-name" id="markO" value="O">Y</button>
        <button role="button" class="button-name" id="restart">Restart</button>
    </div>
        <div class="grid-board">
            <div class="cell" data-index="1"></div>
            <div class="cell" data-index="2"></div>
            <div class="cell" data-index="3"></div>
            <div class="cell" data-index="4"></div>
            <div class="cell" data-index="5"></div>
            <div class="cell" data-index="6"></div>
            <div class="cell" data-index="7"></div>
            <div class="cell" data-index="8"></div>
            <div class="cell" data-index="9"></div>
        </div>
    </div>
        `
    }

    return {
        render,
    }
})()


// To choose the marks 

const playerMark = (mark) => {
    let markX = document.querySelector('#markX').value
    let markO = document.querySelector('#markO').value

    console.log(markX, markO);

    //To place the marker by clicking
    function placeMark() {
        let cells = document.querySelectorAll('.cell').forEach(cell => {
            cell.addEventListener("click", function () {

            })
        })
    }
    placeMark()

    return {
        mark,
        markX,
        markO,
    }
}
playerMark()

document.querySelector('#restart').addEventListener('click', () => {
    gameBoard.render()
    playerMark()
})

function markWithX(square, value) {
    let markX = document.querySelector('#markX').addEventListener('click', function () {
        square.innerHTML = value
    })
}


function markWithO() {
    let markO = document.querySelector('#markO').addEventListener('click', function () {
        console.log('O is clicked!');
    })
}
