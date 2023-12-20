let cross = false;
const boxes = document.querySelectorAll(".box");
const audioCircle = new Audio("./audio/circle.mp3");
const audioCross = new Audio("./audio/cross.mp3");
const audioTie = new Audio("./audio/tie.mp3");
const audioWin = new Audio("./audio/win.mp3");
const audioReset = new Audio("./audio/reset.mp3");
let totalMoves = 0;
console.log(boxes);
function main() {
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener("click", function boxClickHandler() {
      const clickedClass = this.classList[1]; // Grasping the second class
      if (document.querySelector(`.${clickedClass}`).innerHTML === "") {
        if (cross) {
          document.querySelector(`.${clickedClass}`).innerHTML = "O";
          document.querySelector(`.${clickedClass}`).classList.add("circle");
          audioCross.play();
          circleVictory();
          drawBoard();
        } else {
          document.querySelector(`.${clickedClass}`).innerHTML = "X";
          document.querySelector(`.${clickedClass}`).classList.add("cross");
          audioCircle.play();
          crossVictory();
          drawBoard();
        }
        cross = !cross;
      }
    });
  }
}
main();

function resetGame() {
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].innerHTML = "";
    boxes[i].classList.remove("circle", "cross");
  }
  totalMoves = 0;
  cross = false;
}
function circleVictory() {
  flag = false;
  const elements = document.querySelectorAll(".box");
  let checkElements = [elements[0], elements[1], elements[2]];
  if (
    checkElements[0].classList.contains("circle") &&
    checkElements[1].classList.contains("circle") &&
    checkElements[2].classList.contains("circle")
  ) {
    flag = true;
  }
  checkElements = [elements[3], elements[4], elements[5]];
  if (
    checkElements[0].classList.contains("circle") &&
    checkElements[1].classList.contains("circle") &&
    checkElements[2].classList.contains("circle")
  ) {
    flag = true;
  }
  checkElements = [elements[6], elements[7], elements[8]];
  if (
    checkElements[0].classList.contains("circle") &&
    checkElements[1].classList.contains("circle") &&
    checkElements[2].classList.contains("circle")
  ) {
    flag = true;
  }
  checkElements = [elements[0], elements[4], elements[8]];
  if (
    checkElements[0].classList.contains("circle") &&
    checkElements[1].classList.contains("circle") &&
    checkElements[2].classList.contains("circle")
  ) {
    flag = true;
  }
  checkElements = [elements[2], elements[4], elements[6]];
  if (
    checkElements[0].classList.contains("circle") &&
    checkElements[1].classList.contains("circle") &&
    checkElements[2].classList.contains("circle")
  ) {
    flag = true;
  }
  checkElements = [elements[0], elements[3], elements[6]];
  if (
    checkElements[0].classList.contains("circle") &&
    checkElements[1].classList.contains("circle") &&
    checkElements[2].classList.contains("circle")
  ) {
    flag = true;
  }
  checkElements = [elements[1], elements[4], elements[7]];
  if (
    checkElements[0].classList.contains("circle") &&
    checkElements[1].classList.contains("circle") &&
    checkElements[2].classList.contains("circle")
  ) {
    flag = true;
  }
  checkElements = [elements[2], elements[5], elements[8]];
  if (
    checkElements[0].classList.contains("circle") &&
    checkElements[1].classList.contains("circle") &&
    checkElements[2].classList.contains("circle")
  ) {
    flag = true;
  }

  if (flag === true) {
    winBoard("circle", "O");
    setTimeout(resetGame, 2000);
    setTimeout(resetScreen, 2000);
    setTimeout(boardUpdate, 2000);
  }
  flag = false;
}

// circleVictory();

function crossVictory() {
  glaf = false;
  const elements = document.querySelectorAll(".box");
  let checkElements = [elements[0], elements[1], elements[2]];
  if (
    checkElements[0].classList.contains("cross") &&
    checkElements[1].classList.contains("cross") &&
    checkElements[2].classList.contains("cross")
  ) {
    glaf = true;
  }
  checkElements = [elements[3], elements[4], elements[5]];
  if (
    checkElements[0].classList.contains("cross") &&
    checkElements[1].classList.contains("cross") &&
    checkElements[2].classList.contains("cross")
  ) {
    glaf = true;
  }
  checkElements = [elements[6], elements[7], elements[8]];
  if (
    checkElements[0].classList.contains("cross") &&
    checkElements[1].classList.contains("cross") &&
    checkElements[2].classList.contains("cross")
  ) {
    glaf = true;
  }
  checkElements = [elements[0], elements[4], elements[8]];
  if (
    checkElements[0].classList.contains("cross") &&
    checkElements[1].classList.contains("cross") &&
    checkElements[2].classList.contains("cross")
  ) {
    glaf = true;
  }
  checkElements = [elements[2], elements[4], elements[6]];
  if (
    checkElements[0].classList.contains("cross") &&
    checkElements[1].classList.contains("cross") &&
    checkElements[2].classList.contains("cross")
  ) {
    glaf = true;
  }
  checkElements = [elements[0], elements[3], elements[6]];
  if (
    checkElements[0].classList.contains("cross") &&
    checkElements[1].classList.contains("cross") &&
    checkElements[2].classList.contains("cross")
  ) {
    glaf = true;
  }
  checkElements = [elements[1], elements[4], elements[7]];
  if (
    checkElements[0].classList.contains("cross") &&
    checkElements[1].classList.contains("cross") &&
    checkElements[2].classList.contains("cross")
  ) {
    glaf = true;
  }
  checkElements = [elements[2], elements[5], elements[8]];
  if (
    checkElements[0].classList.contains("cross") &&
    checkElements[1].classList.contains("cross") &&
    checkElements[2].classList.contains("cross")
  ) {
    glaf = true;
  }

  if (glaf === true) {
    winBoard("cross", "X");
    setTimeout(resetGame, 2000);
    setTimeout(resetScreen, 2000);
    setTimeout(boardUpdate, 2000);
  }
  glaf = false;
}

const scoreBoard = {
  cross: 0,
  ties: 0,
  circle: 0,
};
function winBoard(player, playerSign) {
  document.querySelector(".idle-1").classList.add("won");
  document.querySelector(
    ".idle-1"
  ).innerHTML = `${playerSign} has Won the Game!`;
  setTimeout(() => {
    audioWin.play();
  }, 500);
  scoreBoard[player]++;
  document.querySelector(".idle-1").classList.add("pop-anim");
  console.log(scoreBoard);
}

function resetScreen() {
  document.querySelector(".idle-1").classList.remove("won");
  document.querySelector(".idle-1").innerHTML = "";
}
document.querySelector(
  ".scoreBoard"
).innerHTML = `<h2>Score Board:</h2> <p class="scoreBoardps cross-score">Cross: ${scoreBoard.cross} wins </p> <p class='scoreBoardps ties-score'>Ties: ${scoreBoard.ties} wins</p> <p class="scoreBoardps circle-score"> Circle: ${scoreBoard.circle} wins</p>
<button class="btn-2" onclick="resetScore();">Reset Score</button>
`;
function boardUpdate() {
  document.querySelector(
    ".scoreBoard"
  ).innerHTML = `<h2>Score Board:</h2> <p class="scoreBoardps cross-score">Cross: ${scoreBoard.cross} wins </p> <p class='scoreBoardps ties-score'>Ties: ${scoreBoard.ties} wins</p> <p class="scoreBoardps circle-score"> Circle: ${scoreBoard.circle} wins</p> 
  <button class="btn-2" onclick="resetScore();">Reset Score</button>
  `;
}
function resetScore() {
  scoreBoard.circle = 0;
  scoreBoard.cross = 0;
  scoreBoard.ties = 0;
  boardUpdate();
  audioReset.play();
}

function drawBoard() {
  totalMoves++;
  console.log(totalMoves);
  if (totalMoves === 9) {
    document.querySelector(".idle-1").classList.add("won");
    document.querySelector(".idle-1").innerHTML = `The Game is a Draw!`;
    scoreBoard.ties++;
    setTimeout(() => {
      audioTie.play();
    }, 200);
    document.querySelector(".idle-1").classList.add("pop-anim");
    console.log(scoreBoard);
    setTimeout(resetGame, 2000);
    setTimeout(resetScreen, 2000);
    setTimeout(boardUpdate, 2000);
  }
}
