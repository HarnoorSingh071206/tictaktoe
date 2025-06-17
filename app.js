
//i have access the elements

let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-game");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let moveCount = 0;

let turnO = true;

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

// Reset Game
const resetGame = () => {
  turnO = true;
  enableBoxes();
  moveCount = 0;

  msgContainer.classList.add("hide");
};

// Enable boxes
const enableBoxes = () => {
  boxes.forEach((box) => {
    box.innerText = "";
    box.disabled = false;
  });
};

// Disable boxes
const disableBoxes = () => {
  boxes.forEach((box) => {
    box.disabled = true;
  });
};

// Show winner message
const showWinner = (winner) => {
  msg.innerText = `🎉 Congratulations, winner is ${winner}! have a cookie 🍪`;
  msgContainer.classList.remove("hide");
  disableBoxes();
};

// Box click handler
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      box.innerText = "O";
      turnO = false;
    } else {
      box.innerText = "X";
      turnO = true;
    }
    box.disabled = true;
    moveCount++;
    checkWinner();
  });
});

// Check winner logic
const checkWinner = () => {
  for (let pattern of winPatterns) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if (pos1Val !== "" && pos1Val === pos2Val && pos2Val === pos3Val) {
      console.log("Winner is", pos1Val);
      showWinner(pos1Val);
      return;
    }
  }

  if (moveCount === 9) {
    showDraw();
  }
};

const showDraw = () => {
  msg.innerText = "it's a draw.Try again to win!!but still have a cookie🍪";
  msgContainer.classList.remove("hide");
  disableBoxes();
  }

// Hook buttons to reset
newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
