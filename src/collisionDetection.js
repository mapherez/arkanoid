export function detectCollision(ball, gameObject) {
  let topOfBall = ball.position.y;
  let bottomOfBall = ball.position.y + ball.size;
  let leftSideOfBall = ball.position.x;
  let rightSideOfBall = ball.position.x + ball.size;

  let topOfObject = gameObject.position.y;
  let bottomOfObject = gameObject.position.y + gameObject.height;
  let leftSideOfObject = gameObject.position.x;
  let rightSideOfObject = gameObject.position.x + gameObject.width;

  /*if (bottomOfBall >= topOfObject && topOfBall <= bottomOfObject && rightSideOfBall >= leftSideOfObject && leftSideOfBall <= rightSideOfObject) {
    return true;
  } else {
    return false;
  }*/

  if (
    (bottomOfBall >= topOfObject && bottomOfBall < bottomOfObject && rightSideOfBall >= leftSideOfObject && leftSideOfBall <= rightSideOfObject) ||
    (topOfBall <= bottomOfObject && topOfBall > topOfObject && rightSideOfBall >= leftSideOfObject && leftSideOfBall <= rightSideOfObject)
  ) {
    console.log("y");
    return "y";
  } else if (
    (rightSideOfBall >= leftSideOfObject && leftSideOfBall < leftSideOfObject && bottomOfBall <= bottomOfObject && topOfBall >= topOfObject) ||
    (rightSideOfBall >= leftSideOfObject && leftSideOfBall < leftSideOfObject && bottomOfBall < bottomOfObject && topOfBall < topOfObject && bottomOfBall > topOfObject) ||
    (rightSideOfBall >= leftSideOfObject && leftSideOfBall < leftSideOfObject && bottomOfBall > bottomOfObject && topOfBall > topOfObject && topOfBall < bottomOfObject) ||

    (leftSideOfBall <= rightSideOfObject && rightSideOfBall > rightSideOfObject && bottomOfBall <= bottomOfObject && topOfBall >= topOfObject) ||
    (leftSideOfBall <= rightSideOfObject && rightSideOfBall > rightSideOfObject && bottomOfBall < bottomOfObject && topOfBall < topOfObject && bottomOfBall > topOfObject) ||
    (leftSideOfBall <= rightSideOfObject && rightSideOfBall > rightSideOfObject && bottomOfBall > bottomOfObject && topOfBall > topOfObject && topOfBall < bottomOfObject)
  ) {
    console.log("x");
    return "x";
  }
}
