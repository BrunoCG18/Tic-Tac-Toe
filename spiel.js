const table = document.getElementById('table');
const restartButton = document.getElementById('restart');
table.style.display = 'none';
restartButton.style.display = 'none';

const players = ['X', 'O'];
let currentPlayer;

const cellIds = ['a1','a2','a3','b1','b2','b3','c1','c2','c3'];
const cells = {};
cellIds.forEach(id => {
    const cell = document.getElementById(id);
    cells[id] = cell;
    cell.addEventListener('click', () => {
        cell.innerText = currentPlayer;
        swapPlayer();
    });
});

document.body.addEventListener('click', Jmd_Win);

const start = document.getElementById('start');
start.addEventListener('click', main);

const txtSpielanleitung = document.getElementById('howToPlay');
txtSpielanleitung.addEventListener('click', textHowToPlay);

function main() {
    start.innerHTML = 'Los geht`s!';
    table.style.display = '';
    document.getElementById('menu').style.display = 'none';
    setup();
}

function textHowToPlay(){
    document.getElementById("textPlay").innerHTML = 'Die beiden Spieler setzen abwechselnd ihr Zeichen(also Kreuze und  Kreise) in die freien Kästchen des Spielfelds. Ziel ist es, das eigene Zeichen dreie Mal in einer Zeile, in einer Spalte oder in einer Diagonale zu platzieren. Wem das zuerst geling, hat gewonnen.';
}

function setup() {
    if (Math.random() < 0.5) {
        currentPlayer = players[0];
    } else {
        currentPlayer = players[1];
    }
}

function swapPlayer() {
    if (currentPlayer == 'X') {
        currentPlayer = 'O';
    } else if (currentPlayer == 'O'){
        currentPlayer = 'X';
    }
}

function Jmd_Win() {
    if ((cells.a1.innerText == cells.a2.innerText) && (cells.a2.innerText == cells.a3.innerText) && cells.a1.innerText != '') {
        swapPlayer();
        winner();
    } else if ((cells.b1.innerText == cells.b2.innerText) && (cells.b2.innerText == cells.b3.innerText) && cells.b1.innerText != '') {
        swapPlayer();
        winner();
    } else if ((cells.c1.innerText == cells.c2.innerText) && (cells.c2.innerText == cells.c3.innerText) && cells.c1.innerText != '') {
        swapPlayer();
        winner();
    } else if ((cells.a1.innerText == cells.b2.innerText) && (cells.b2.innerText == cells.c3.innerText) && cells.a1.innerText != '') {
        swapPlayer();
        winner();
    } else if ((cells.a3.innerText == cells.b2.innerText) && (cells.b2.innerText == cells.c1.innerText) && cells.a3.innerText != '') {
        swapPlayer();
        winner();
    } else if ((cells.a1.innerText == cells.b1.innerText) && (cells.b1.innerText == cells.c1.innerText) && cells.a1.innerText != '') {
        swapPlayer();
        winner();
    } else if ((cells.a2.innerText == cells.b2.innerText) && (cells.b2.innerText == cells.c2.innerText) && cells.a2.innerText != '') {
        swapPlayer();
        winner();
    } else if ((cells.a3.innerText == cells.b3.innerText) && (cells.b3.innerText == cells.c3.innerText) && cells.a3.innerText != '') {
        swapPlayer();
        winner();
    } else if (cellIds.every(id => cells[id].innerText != '')) {
        tie();
    }
}

function winner() {
    const winnerEl = document.getElementById('winner');
    winnerEl.innerHTML = `Der Spieler <strong>${currentPlayer}</strong> hat gewonnen!`;
    winnerEl.style.background = '#bacaee';
    table.style.width = '45vw';
    table.style.height = '75vh';
    restartButton.style.display = '';
}

function tie() {
    const winnerEl = document.getElementById('winner');
    winnerEl.innerHTML = `Es war ein Unentschieden `;
    winnerEl.style.background = '#bacaee';
    table.style.width = '45vw';
    table.style.height = '75vh';
    restartButton.style.display = '';
}

restartButton.addEventListener('click', restart);

function restart () {
    cellIds.forEach(id => {
        cells[id].innerText = '';
    });
    table.style.width = '99vw';
    table.style.height = '76vh';
    const winnerEl = document.getElementById('winner');
    winnerEl.innerHTML = '';
    winnerEl.style.background = '';
    restartButton.style.display = 'none';
    main();
}