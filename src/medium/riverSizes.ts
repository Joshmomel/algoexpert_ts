export function riverSizes(matrix: number[][]) {
  const height = matrix.length - 1;
  const width = matrix[0].length - 1;

  const visit: number[][] = [];
  const size: number[] = [];

  for (let i = 0; i <= height; i++) {
    visit.push([]);
    for (let j = 0; j <= width; j++) {
      visit[i][j] = 0;
    }
  }

  for (let i = 0; i <= height; i++) {
    for (let j = 0; j <= width; j++) {
      if (matrix[i][j] === 1 && visit[i][j] === 0) {
        const riverSize = calculateSize(matrix, visit, i, j);
        size.push(riverSize);
      }
    }
  }

  return size;
}

function calculateSize(
  matrix: number[][],
  visit: number[][],
  height: number,
  width: number
): number {
  console.log('calculateSize', height, width);
  if (height < 0 || width < 0 || height >= matrix.length || width >= matrix[0].length) return 0;
  if (matrix[height][width] === 0 || visit[height][width] === 1) {
    visit[height][width] = 1;
    return 0;
  } else {
    visit[height][width] = 1;
  }
  return (
    1 +
    calculateSize(matrix, visit, height + 1, width) +
    calculateSize(matrix, visit, height, width + 1) +
    calculateSize(matrix, visit, height - 1, width) +
    calculateSize(matrix, visit, height, width - 1)
  );
}

const matrix = [
  [1, 0, 0, 1, 0, 1, 0, 0, 1, 1, 1, 0],
  [1, 0, 1, 0, 0, 1, 1, 1, 1, 0, 1, 0],
  [0, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1],
  [1, 0, 1, 0, 1, 1, 0, 0, 0, 1, 0, 0],
  [1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 0, 1],
];

const visit = [
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
];

// const size = calculateSize(matrix, visit, 1, 2)
// console.log(size);

riverSizes(matrix);
