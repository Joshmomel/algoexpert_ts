export function zigzagTraverse(array: number[][]) {
  const h = array.length - 1;
  const w = array[0].length - 1;
  const result = [];

  let row = 0;
  let col = 0;
  let goingDown = true;

  while (!isOut(row, col, h, w)) {
    result.push(array[row][col]);
    if (goingDown) {
      if (col === 0 || row === h) {
        goingDown = false;
        if (row === h) {
          col++;
        } else {
          row++;
        }
      } else {
        row++;
        col--;
      }
    } else {
      if (row === 0 || col === w) {
        goingDown = true;
        if (col === w) row++;
        else col++;
      } else {
        row--;
        col++;
      }
    }
  }

  return result;
}

function isOut(row: number, col: number, h: number, w: number) {
  return row < 0 || row > h || col < 0 || col > w;
}

const array = [
  [1, 3, 4, 10],
  [2, 5, 9, 11],
  [6, 8, 12, 15],
  [7, 13, 14, 16],
];

console.log(zigzagTraverse(array));
