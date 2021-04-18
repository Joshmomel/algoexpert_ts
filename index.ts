export function riverSizes(matrix: number[][]) {
  // rite your code here.
  if (matrix.length < 1) return [-1];

  let visited = new Array(matrix.length)
    .fill(false)
    .map(() => new Array(matrix[0].length).fill(false));
  let rivers = [];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (visited[i][j]) continue;
      if (matrix[i][j] === 0) continue;
      visited[i][j] = true;
      // TODO: get river size
    }
  }

  console.log('matrix ', matrix);
  console.log(visited);

  return [-1];
}

riverSizes(new Array(5).fill(0).map(() => new Array(4).fill(0)));
