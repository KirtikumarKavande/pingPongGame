console.log("welcome to Kirtikumar world");

const ball = document.getElementById("ball");
const table = document.getElementById("playing-table");
const paddle = document.getElementById("paddle");

document.addEventListener("DOMContentLoaded", () => {
  let distanceToBeTraveledPerSecOnXDirection = 2;
  let distanceToBeTraveledPerSecOnYDirection = 2;
  let currentPositionBallFromX = 20;
  let currentPositionBallFromY = 2;

  let currentPositionOfPaddleFromY = 0;

  let distanceToBeTraveledPerArrowPressOnY = 30;

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

    console.log("lets see", paddle.offsetLeft);
  });

  setInterval(() => {
    currentPositionBallFromX += distanceToBeTraveledPerSecOnXDirection;
    currentPositionBallFromY += distanceToBeTraveledPerSecOnYDirection;

    console.log("sum", +paddle.offsetLeft + +paddle.offsetWidth);

    ball.style.left = `${currentPositionBallFromX}px`;
    ball.style.top = `${currentPositionBallFromY}px`;
    if (
      currentPositionBallFromX < paddle.offsetLeft + paddle.offsetWidth &&
      currentPositionBallFromY > paddle.offsetTop &&
      currentPositionBallFromY < paddle.offsetTop + paddle.offsetHeight
    ) {
      distanceToBeTraveledPerSecOnXDirection *= -1;
    }
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
  }, 10);
});
