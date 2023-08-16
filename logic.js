let players = ['x', 'o'];
let activePlayer = 0;

let board = [
  ['', '', ''],
  ['', '', ''],
  ['', '', ''],
];

function startGame() {
  activePlayer = players[0];
  board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ];
  renderBoard(board);
}

function click(row, col) {
  board[row][col] = activePlayer;

  renderBoard(board);
  isWin(activePlayer);
  setActivePlayer();
}

function setActivePlayer() {
  activePlayer = activePlayer === players[0] ? players[1] : players[0];
}

function getActivePlayer() {
  return activePlayer === 'x' ? 0 : 1;
}

// Проверка вертикали и горизонтали
function checkRowsAndColumns(player) {
  for (let i = 0; i < 3; i++) {
    if (
      (board[i][0] === player &&
        board[i][1] === player &&
        board[i][2] === player) ||
      (board[0][i] === player &&
        board[1][i] === player &&
        board[2][i] === player)
    ) {
      showWinner(getActivePlayer());
      return;
    }
  }
}

// Проверка диагоналей
function checkDiagonals(player) {
  const diagonal1 =
    board[0][0] === player && board[1][1] === player && board[2][2] === player;
  const diagonal2 =
    board[2][0] === player && board[1][1] === player && board[0][2] === player;

  if (diagonal1 || diagonal2) {
    showWinner(getActivePlayer());
  }
}

function isWin(player) {
  checkRowsAndColumns(player);
  checkDiagonals(player);
}