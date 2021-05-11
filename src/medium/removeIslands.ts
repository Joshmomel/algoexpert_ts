export function removeIslands(matrix: number[][]) {
  const height = matrix.length - 1;
  const width = matrix[0].length - 1;

  const visit: number[][] = [];

  for (let i = 0; i <= height; i++) {
    visit.push([]);
    for (let j = 0; j <= width; j++) {
      visit[i].push(0);
    }
  }

  const newMatrix = JSON.parse(JSON.stringify(matrix));

  for (let i = 1; i < height; i++) {
    for (let j = 1; j < width; j++) {
      newMatrix[i][j] = 0;
    }
  }

  for (let h = 0; h < height; h++) {
    addIslands(matrix, newMatrix, visit, h, 0);
    addIslands(matrix, newMatrix, visit, h, width);
  }
  for (let w = 0; w < width; w++) {
    addIslands(matrix, newMatrix, visit, 0, w);
    addIslands(matrix, newMatrix, visit, height, w);
  }

  return newMatrix;
}

function addIslands(
  matrix: number[][],
  newMatrix: number[][],
  visit: number[][],
  height: number,
  width: number
) {
  if (
    height < 0 ||
    width < 0 ||
    height > matrix.length - 1 ||
    width > matrix[0].length - 1 ||
    visit[height][width] === 1 ||
    matrix[height][width] === 0 ||
    (newMatrix[height][width] === 1 &&
      height != 0 &&
      width != 0 &&
      height != matrix.length - 1 &&
      width != matrix[0].length - 1)
  ) {
    return;
  } else {
    visit[height][width] = 1;
    newMatrix[height][width] = 1;
  }

  addIslands(matrix, newMatrix, visit, height + 1, width);
  addIslands(matrix, newMatrix, visit, height, width + 1);
  addIslands(matrix, newMatrix, visit, height - 1, width);
  addIslands(matrix, newMatrix, visit, height, width - 1);
}

const matrix = [
  [1, 0, 0, 0, 0, 0],
  [0, 1, 0, 1, 1, 1],
  [0, 0, 1, 0, 1, 0],
  [1, 1, 0, 0, 1, 0],
  [1, 0, 1, 1, 0, 0],
  [1, 0, 0, 0, 0, 1],
];

const newMatrix = [
  [1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 1],
  [0, 0, 0, 0, 0, 0],
  [1, 0, 0, 0, 0, 0],
  [1, 0, 0, 0, 0, 0],
  [1, 0, 0, 0, 0, 1],
];

const visit = [
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
];

// addIslands(matrix, newMatrix, visit, 1, 5);
// console.log(newMatrix);

console.log(removeIslands(matrix));
