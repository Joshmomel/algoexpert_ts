export function sortedSquaredArray(array: number[]) {
  return array.map((item) => item * item).sort((a, b) => a - b);
}

console.log(sortedSquaredArray([1, 2, 3]));
