let players = ['x', 'o'];
let activePlayer = 0;

let board = [
  ['', '', ''],
  ['', '', ''],
  ['', '', ''],
];

function startGame() {
  activePlayer = players[0];

  renderBoard(board);
}

function click(row, col) {
  board[row][col] = activePlayer;

  renderBoard(board);
  isXWin();
  isOWin();
  setActivePlayer();
}

function setActivePlayer() {
  activePlayer = activePlayer === players[0] ? players[1] : players[0];
}

function getActivePlayer() {
  return activePlayer === 'x' ? 0 : 1;
}

function isXWin() {
  // по горизонтали
  const case1 =
    board[0][0] === 'x' && board[0][1] === 'x' && board[0][2] === 'x';
  const case2 =
    board[1][0] === 'x' && board[1][1] === 'x' && board[1][2] === 'x';
  const case3 =
    board[2][0] === 'x' && board[2][1] === 'x' && board[2][2] === 'x';

  // по вертикали
  const case4 =
    board[0][0] === 'x' && board[1][0] === 'x' && board[2][0] === 'x';
  const case5 =
    board[0][1] === 'x' && board[1][1] === 'x' && board[2][1] === 'x';
  const case6 =
    board[0][2] === 'x' && board[1][2] === 'x' && board[2][2] === 'x';

  //по диагонали
  const case7 =
    board[0][0] === 'x' && board[1][1] === 'x' && board[2][2] === 'x';
  const case8 =
    board[2][0] === 'x' && board[1][1] === 'x' && board[0][2] === 'x';

  if (case1 || case2 || case3 || case4 || case5 || case6 || case7 || case8) {
    showWinner(getActivePlayer());
  }
}

function isOWin() {
  // по горизонтали
  const case1 =
    board[0][0] === 'o' && board[0][1] === 'o' && board[0][2] === 'o';
  const case2 =
    board[1][0] === 'o' && board[1][1] === 'o' && board[1][2] === 'o';
  const case3 =
    board[2][0] === 'o' && board[2][1] === 'o' && board[2][2] === 'o';

  // по вертикали
  const case4 =
    board[0][0] === 'o' && board[1][0] === 'o' && board[2][0] === 'o';
  const case5 =
    board[0][1] === 'o' && board[1][1] === 'o' && board[2][1] === 'o';
  const case6 =
    board[0][2] === 'o' && board[1][2] === 'o' && board[2][2] === 'o';

  //по диагонали
  const case7 =
    board[0][0] === 'o' && board[1][1] === 'o' && board[2][2] === 'o';
  const case8 =
    board[2][0] === 'o' && board[1][1] === 'o' && board[0][2] === 'o';

  if (case1 || case2 || case3 || case4 || case5 || case6 || case7 || case8) {
    showWinner(getActivePlayer());
  }
}

let reset = document.getElementsByClassName('reset');

function resetGame() {
  const initBoard = [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ];

  board = initBoard;
  renderBoard(initBoard);
  activePlayer = players[0];
}

reset[0].addEventListener('click', function (event) {
  resetGame();
});

reset[1].addEventListener('click', function (event) {
  resetGame();
});
