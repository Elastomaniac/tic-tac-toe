let players = ["x", "o"];
let activePlayer = 0;
// стартовый код(исключительно две строки выше):

let board;

function startGame() {
  board = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];
  renderBoard(board);
  let currentPlayer = players[0];
}

function click(row, col) {
  board[row][col] = activePlayer;
  console.log(board[row][col]);
  renderBoard(board);
}
startGame();
// click(targetData.row, targetData.col);

// Функция для проверки победы
const checkWin = () => {
  // Проверяем все возможные комбинации, где можно выиграть
  const winCombinations = [
    // Горизонтальные линии
    [
      [0, 0],
      [0, 1],
      [0, 2],
    ],
    [
      [1, 0],
      [1, 1],
      [1, 2],
    ],
    [
      [2, 0],
      [2, 1],
      [2, 2],
    ],
    // Вертикальные линии
    [
      [0, 0],
      [1, 0],
      [2, 0],
    ],
    [
      [0, 1],
      [1, 1],
      [2, 1],
    ],
    [
      [0, 2],
      [1, 2],
      [2, 2],
    ],
    // Диагональные линии
    [
      [0, 0],
      [1, 1],
      [2, 2],
    ],
    [
      [0, 2],
      [1, 1],
      [2, 0],
    ],
  ];

  // Проверяем каждую комбинацию
  for (let i = 0; i < winCombinations.length; i++) {
    const [a, b, c] = winCombinations[i];
    if (
      board[a[0]][a[1]] === board[b[0]][b[1]] &&
      board[b[0]][b[1]] === board[c[0]][c[1]] &&
      board[a[0]][a[1]] !== ""
    ) {
      return true; // Если находим победную комбинацию, возвращаем true
    }
  }

  return false; // Если не нашли победную комбинацию, возвращаем false
};

// Функция для проверки ничьи
const checkDraw = () => {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === "") {
        return false; // Если находим пустую ячейку, игра не окончена
      }
    }
  }

  return true; // Если все ячейки заполнены, игра окончена
};

// Функция для хода игрока
const makeMove = (row, col) => {
  // Проверяем, является ли ячейка пустой
  if (board[row][col] === "") {
    board[row][col] = currentPlayer; // Ставим знак текущего игрока в ячейку
    // Проверяем, есть ли победитель или ничья
    if (checkWin()) {
      console.log(`Игрок ${currentPlayer} победил!`);
      // Сбрасываем поле
      resetBoard();
    } else if (checkDraw()) {
      console.log("Ничья");
      // Сбрасываем поле
      resetBoard();
    } else {
      // Меняем текущего игрока
      currentPlayer = currentPlayer === "X" ? "O" : "X";
    }
  } else {
    console.log("Ячейка уже занята! Попробуйте еще раз.");
  }
};

// Так же вы должны в функции click записывать символ текущего игрока который делает ход  а вы при клике просто записываете пустое игровое поле

// Чтобы обратиться к ячеке по которой был совершен клик используйте аргументы вашей функции click (row или col) в качестве индексов для вашего двумерного массива. board

// И далее описывайте условия победы
// click(1, 2);
// function showWinner(winner)

//   Вам нужно реализовать две основные функции:
// 1)startGame вызывается без параметров при открытии или перезапуске игры. В ней нужно создать поле игры и выбрать активного игрока.
// 2)click вызывается при клике игрока по полю. Вызов происходит с двумя значениями — номер строки и колонки, по которой произошёл клик. В этой функции нужно обновить игровое поле и проверить, выиграл ли игрок, либо можно передавать ход следующему.
// Создавайте дополнительные функции, если они вам потребуются.

// Принцип работы игры
// Как работает игра:

// 1)Когда страница загружается, вызывается функция startGame. Она должна сказать, кто ходит первый, затем создать игровое поле и отрисовать его.
// 2)Когда игрок кликает на игровом поле, происходит вызов функции click. Нужно поставить метку игрока в этом поле, отрисовать поле на экране. Затем проверить, не выиграл ли игрок. Если выиграл, то поздравить его, а если ещё нет — передать ход следующему игроку.
// Внутреннее устройство игры делится на три части:

// логическая модель игры;
// отрисовка логической модели на экране (реализовано);
// реакция на действия игрока (реализовано).
// Ваша задача — создать и поддержать актуальность логической модели игры. Логическая схема игры — информация об игровом поле и метках в нём.

// Игровое поле — таблица 3х3 клетки. Предлагается представить игровое поле в виде массива массивов (см. примеры ниже).

// В ячейке таблицы может храниться пустота (метки нет), либо метка игрока (х, о). Когда игрок нажимает на игровое поле, нужно установить соответствующий значок в ячейку таблицы.

// Для отрисовки на экране нового состояния игрового поля нужно вызвать функцию renderBoard и передать в неё информацию о поле в виде массива.

// Если игра закончилась победой одного из игроков, нужно вызвать функцию showWinner и передать в неё номер игрока-победителя.

// Подготовка
// Информация об игроках хранится в массиве. Каждому игроку соответсвует проставляемый символ на поле: let players = ['x', 'o'];.

// Функция startGame
// Функция будет вызываться без параметров внешним кодом. В этой функции нужно:

//1) Создать игровое поле. Оно должно представлять из себя массив массивов. Для обращения к ячейке игрового поля нужно знать строку и колонку этого поля.
// 2)Установить активного игрока.
// 3)Вызвать функцию renderBoard для отрисовки игрового поля.

//   Функция click
// Функция будет вызываться с двумя параметрами — номером строки и колонки ячейки, на которой произошёл клик.
// В этой функции нужно:
//1 Обновить игровое поле, записать в нужную ячейку символ игрока.
//2 Вызвать функцию renderBoard для отрисовки игрового поля.
//3 Проверить, выигрышная ли сложилась ситуация.
//4 Если ситуация выигрышная, вызвать функцию showWinner и передать в неё номер игрока.
//5 Если нужно играть дальше, то передать ход следующему игроку.
