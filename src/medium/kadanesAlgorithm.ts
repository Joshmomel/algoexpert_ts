export function kadanesAlgorithm(array: number[]) {
  // Write your code here.
  let max = array[0];
  let maxList = [];
  maxList[0] = max;

  for (let i = 1; i < array.length; i++) {
    maxList[i] = Math.max(maxList[i - 1] + array[i], array[i]);
    if (max < maxList[i]) max = maxList[i];
  }

  // console.log(maxList)

  return max;
}

let res = kadanesAlgorithm([3, 5, -9, 1, 3, -2, 3, 4, 7, 2, -9, 6, 3, 1, -5, 4]);
console.log(res);
