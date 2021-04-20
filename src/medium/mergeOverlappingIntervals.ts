export function mergeOverlappingIntervals(array: number[][]) {

  array.sort((a, b) => a[0] - b[0]);

  let current = array[0];
  let constructArray = [];

  for (let i = 1; i < array.length; i++) {
    if (array[i][0] <= current[1]) {
      const minStart = Math.min(current[0], array[i][0])
      const maxEnd = Math.max(current[1], array[i][1])

      current = [minStart, maxEnd]
    } else {
      constructArray.push(current);

      current = array[i];
    }
  }
  constructArray.push(current);

  return constructArray;
}

const intervals = [
  [1, 22],
  [-20, 30]
]
console.log(mergeOverlappingIntervals(intervals));
