// logic of tic tac toe
const X_CLASS = 'x'
const CIRCLE_CLASS = 'circle'
// sellect all cells
const cellElements = document.querySelectorAll('[data-cell]')

let circleTurn
// loops
//event listeners

cellElements.forEach(cell => {
    cell.addEventListener('click', handleClick,{ once: true})
})

function handleClick(e) {
    const cell = e.target
    const currentClass = circleTurn ? CIRCLE_CLASS : X_CLASS
    // placeMark
    placeMark(cell, currentClass)
    // check for win
    // check for draw
    // switch turns
}


function placeMark(cell, currentClass) {
    cell.classList.add(currentClass)
}