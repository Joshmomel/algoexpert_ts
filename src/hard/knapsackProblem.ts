export function knapsackProblem(items: [number, number][], capacity: number): [number, number[]] {
  const valueMatrix = retrieveMatrix(items, capacity);
  const sequence = getItems(valueMatrix, items)

  return [
    valueMatrix[items.length][capacity], // total value
    sequence, // item indices
  ];
}

function retrieveMatrix(items: [number, number][], capacity: number) {
  const valueList: number[][] = [];

  for (let i = 0; i < items.length + 1; i++) {
    const row = new Array(capacity + 1).fill(0);
    valueList.push(row);
  }

  for (let i = 1; i < items.length + 1; i++) {
    const v = items[i - 1][0];
    const w = items[i - 1][1];
    for (let c = 0; c < capacity + 1; c++) {
      if (w > c) valueList[i][c] = valueList[i - 1][c];
      else {
        valueList[i][c] = Math.max(valueList[i - 1][c], valueList[i - 1][c - w] + v);
      }
    }
  }

  return valueList;
}

function getItems(matrix: number[][], items: [number, number][]) {
  const sequence: number[] = [];
  let i = matrix.length - 1;
  let c = matrix[0].length - 1;

  while (i > 0) {
    if (matrix[i][c] === matrix[i - 1][c]) i--;
    else {
      sequence.unshift(i - 1);
      c -= items[i - 1][1];
      i--;
    }
    if (c === 0) break
  }

  return sequence
}

const itmes = [
  [1, 2],
  [4, 3],
  [5, 6],
  [6, 7],
] as [number, number][];

const capacity = 10;

console.log(knapsackProblem(itmes, capacity))
