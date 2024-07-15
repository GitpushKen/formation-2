const board = document.getElementById('board');

let player = "X";

board.addEventListener('click', handlelick)

function handlelick(event) {
    const cell = event.target;

    if (!cell.classList.contains('cell')) {
        return;
    }
    console.log('clicked');
    cell.textContent = player;
}


