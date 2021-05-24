type Position = { row: number; col: number };
type Dict = { [key: string]: boolean };

export function minimumPassesOfMatrix(matrix: number[][]) {
  let iterateTimes = 0;
  let totalToToggle = 0;
  const dict: Dict = {};

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] < 0) {
        dict[String(i) + String(j)] = true;
        totalToToggle++;
      }
    }
  }

  let progress = true;
  while (totalToToggle > 0 && progress) {
    iterateTimes++;
    progress = false;

    let toggleList = [];
    for (const key in dict) {
      if (!dict[key]) continue;

      const p = { row: Number(key.charAt(0)), col: Number(key.charAt(1)) };
      if (canToggle(p, matrix)) {
        totalToToggle--;
        dict[key] = false;
        toggleList.push(p);
        progress = true;
      }
    }

    toggleList.forEach((p) => (matrix[p.row][p.col] *= -1));
  }

  return progress ? iterateTimes : -1;
}

function canToggle(p: Position, matrix: number[][]) {
  if (p.row !== 0) {
    const top = { row: p.row - 1, col: p.col };
    if (matrix[top.row][top.col] > 0) return true;
  }
  if (p.col !== matrix[0].length - 1) {
    const right = { row: p.row, col: p.col + 1 };
    if (matrix[right.row][right.col] > 0) return true;
  }
  if (p.row !== matrix.length - 1) {
    const bottom = { row: p.row + 1, col: p.col };
    if (matrix[bottom.row][bottom.col] > 0) return true;
  }
  if (p.col !== 0) {
    const right = { row: p.row, col: p.col - 1 };
    if (matrix[right.row][right.col] > 0) return true;
  }
}

const matrix = [
  [1, 0, 0, -2, -3],
  [-4, -5, -6, -2, -1],
  [0, 0, 0, 0, -1],
  [-1, 0, 3, 0, 3],
];

minimumPassesOfMatrix(matrix);
