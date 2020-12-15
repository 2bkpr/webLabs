function initBoard() {
  let board = document.getElementById("board");
  for (let i = 0; i < 9; i++) {
    let boardCell = document.createElement("div");
    boardCell.classList.add("cell");
    board.append(boardCell);
  }
  return board;
}

function checkAvailableSteps() {
  let cells = document.querySelectorAll(".cell");
  for (let i = 0; i < cells.lenght; i++) {
    if (cells[i].innerHTML == "") return true;
  }
  return false;
}

function checkWinner() {
  let cells = document.querySelectorAll(".cell");
  let row, column, diag, diag1;
  for (let i = 0; i < 3; i++) {
    row = cells[i * 3 + 0].innerHTML != "";
    column = cells[i].innerHTML != "";
    diag = cells[0].innerHTML != "";
    diag1 = cells[3 - 1].innerHTML != "";
    for (let j = 0; j < 3 - 1; j++) {
      row = row && cells[i * 3 + j].innerHTML == cells[i * 3 + j + 1].innerHTML;
      column =
        column &&
        cells[j * 3 + i].innerHTML == cells[(j + 1) * 3 + i].innerHTML;
      diag =
        diag &&
        cells[j * 3 + j].innerHTML == cells[(j + 1) * 3 + j + 1].innerHTML;
      diag1 =
        diag1 &&
        cells[j * 3 + 3 - 1 - j].innerHTML ==
          cells[(j + 1) * 3 + 3 - 1 - (j + 1)].innerHTML;
    }
    let winner =
      (row && cells[i * 3 + 0].innerHTML) ||
      (column && cells[i].innerHTML) ||
      (diag && cells[0].innerHTML) ||
      (diag1 && cells[3 - 1].innerHTML);
    if (winner) return winner;
  }
  return false;
}

function clichHandler(event) {
  if (event.target.className == "cell") {
    if (gameOver) {
      alert("Игры окончены");
      return;
    }
    if (event.target.innerHTML != "") {
      alert("Эта клектка уже занята !");
    } else {
      event.target.innerHTML = turn == 0 ? "x" : "0";
      turn = (turn + 1) % 2;
    }
    let winner = checkWinner();
    if (winner || !checkAvailableSteps()) {
      gameOver = 1;
      alert(winner ? `${winner}  Winner winner chicken dinner !` : "Ничья !");
    }
  }
}

let turn = 0;
let gameOver = 0;

window.onload = function () {
  let board = initBoard();
  board.onclick = clichHandler;
};
