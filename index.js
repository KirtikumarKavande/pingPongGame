console.log("welcome to Kirtikumar world");

const ball = document.getElementById("ball");
const table = document.getElementById("playing-table");
const paddle = document.getElementById("paddle");

document.addEventListener("DOMContentLoaded", () => {
  let distanceToBeTraveledPerSecOnXDirection = 2;
  let distanceToBeTraveledPerSecOnYDirection = 2;
  let currentPositionBallFromX = 2;
  let currentPositionBallFromY = 2;

  // let currentPositionOfPaddleFromX=0
  let currentPositionOfPaddleFromY = 0;

  let distanceToBeTraveledPerArrowPressOnY = 10;

  ball.style.left = `${currentPositionBallFromX}px`;
  ball.style.top = `${currentPositionBallFromY}px`;
  console.log(
    table.offsetHeight,
    table.offsetWidth,
    ball.offsetHeight,
    ball.offsetWidth
  );

  document.addEventListener("keydown", (e) => {
    if (e.keyCode === 40) {
      currentPositionOfPaddleFromY += distanceToBeTraveledPerArrowPressOnY;
      if (
        currentPositionOfPaddleFromY >
        table.offsetHeight - paddle.offsetHeight
      ) {
        currentPositionOfPaddleFromY = table.offsetHeight - paddle.offsetHeight;
        return;
      }
      paddle.style.top = `${currentPositionOfPaddleFromY}px`;
    } else if (e.keyCode === 38) {
      currentPositionOfPaddleFromY -= distanceToBeTraveledPerArrowPressOnY;
      if (currentPositionOfPaddleFromY < 0) {
        currentPositionOfPaddleFromY = 0;
        return;
      }
      paddle.style.top = `${currentPositionOfPaddleFromY}px`;
    }
  });

  setInterval(() => {
    currentPositionBallFromX += distanceToBeTraveledPerSecOnXDirection;
    currentPositionBallFromY += distanceToBeTraveledPerSecOnYDirection;
    if (
      currentPositionBallFromX > table.offsetWidth - ball.offsetWidth ||
      currentPositionBallFromX < 0
    ) {
      distanceToBeTraveledPerSecOnXDirection *= -1;
    }
    if (
      currentPositionBallFromY > table.offsetHeight - ball.offsetHeight ||
      currentPositionBallFromY < 0
    ) {
      distanceToBeTraveledPerSecOnYDirection *= -1;
    }
    ball.style.left = `${currentPositionBallFromX}px`;
    ball.style.top = `${currentPositionBallFromY}px`;
  }, 10);
});
