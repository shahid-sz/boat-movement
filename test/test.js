const canTravelTo = require("../src/canTravel");

const gameMatrix = [
  [false, true, true, false, false, false],
  [true, true, true, false, false, false],
  [true, true, true, true, true, true],
  [false, true, true, false, true, true],
  [false, true, true, true, false, true],
  [false, false, false, false, false, false],
];

console.log(canTravelTo(gameMatrix, 3, 2, 2, 2)); // true
console.log(canTravelTo(gameMatrix, 3, 2, 3, 4)); // false
console.log(canTravelTo(gameMatrix, 3, 2, 6, 2)); // false
