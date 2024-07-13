const board = document.querySelector(".container-board");
let cases = [];

let player1 = [];
let player2 = [];

class Cases {
    constructor(value, isPlayed, playedBy) {
        this.value = value;
        this.isPlayed = isPlayed;
        this.playedBy = playedBy;
    }
}

let winningCondition = {
    0: [0, 1, 2],
    1: [3, 4, 5],
    2: [6, 7, 8],
    3: [0, 3, 6],
    4: [1, 4, 7],
    5: [2, 5, 8],
    6: [0, 4, 8],
    7: [2, 4, 6]
}
// let winningCondition = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6]
// ]



// Création des cases 
for (let i = 0; i < 9; i ++) {
    let caseUnit = new Cases(`${[i]}`, false, null)
    caseUnit.classList.add('case');
    caseUnit.classList.add(`${[i]}`);
    board.appendChild(caseUnit);
    cases.push(caseUnit);
}

function playing1(){
    cases.forEach(c => {
        c.addEventListener('click', () => {
            console.log("clicked");
            c.classList.add("clicked");
            c.classList.add('x');
        })
    })
    
}

function turn() {
    if (!c.classList.contains('clicked')) {

        } else {
            return;
        }
}




