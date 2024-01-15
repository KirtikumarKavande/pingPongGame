console.log("welcome to Kirtikumar world");

const ball = document.getElementById("ball");
const table = document.getElementById("playing-table");
const paddle = document.getElementById("paddle");
let score=0

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
      score++
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
    console.log("currentPositionBallFromX",currentPositionBallFromX)
  if(currentPositionBallFromX===0){
    alert("game over","your score is",score)
    currentPositionBallFromX = 22;

    location.reload()
  }
  }, 1);

  document.addEventListener("mousemove", (e) => {
    e.preventDefault();
    console.log("mouse move", e.clientX);
    let mouseDistanceFromTop = e.clientY;
    let distanceOfTableFromTop = table.offsetTop;

    //  This below is done to make the paddle move relative to its center
    let mousePointControl =
      mouseDistanceFromTop - distanceOfTableFromTop - paddle.offsetHeight / 2;
    currentPositionOfPaddleFromY = mousePointControl;
    
    if (
      currentPositionOfPaddleFromY <= 0 ||
      currentPositionOfPaddleFromY > table.offsetHeight - paddle.offsetHeight
    )
      return;

    paddle.style.top = `${mousePointControl}px`;
  });
  
});
