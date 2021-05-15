export function fourNumberSum(array: number[], targetSum: number) {
  let fourSum = [];
  array.sort((a, b) => a - b);
  for (let i = 0; i < array.length - 3; i++) {
    const newArr = [...array].splice(i + 1);
    const newTarget = targetSum - array[i];
    let threeSum = threeNumberSum(newArr, newTarget);
    if (threeSum.length > 0) {
      fourSum.push(...threeSum.map((item) => [array[i], ...item]));
    }
  }
  return fourSum
}

function threeNumberSum(array: number[], targetSum: number) {
  let threeSum = [];
  for (let i = 0; i < array.length - 2; i++) {
    const newArr = [...array].splice(i + 1);
    const newTarget = targetSum - array[i];
    let twoSum = twoNumberSum(newArr, newTarget);
    if (twoSum.length > 0) {
      threeSum.push(...twoSum.map((item) => [array[i], ...item]));
    }
  }
  return threeSum;
}

function twoNumberSum(array: number[], targetSum: number) {
  let left = 0;
  let right = array.length - 1;
  let combination = [];

  while (left < right) {
    const currentSum = array[left] + array[right];
    if (currentSum === targetSum) {
      combination.push([array[left], array[right]]);
      left++;
      right--;
    } else if (currentSum < targetSum) {
      left++;
    } else {
      right--;
    }
  }

  return combination;
}

console.log(fourNumberSum([7, 6, 4, -1, 1, 2], 16));

// console.log(
//   threeNumberSum(
//     [12, 3, 1, 2, -6, 5, -8, 6].sort((a, b) => a - b),
//     0
//   )
// );
