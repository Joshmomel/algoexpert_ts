export function largestRange(array: number[]): [number, number] {
  let dict: { [key: number]: boolean } = {};
  array.forEach((item) => (dict[item] = true));

  let result: [number, number] = [-1, -1];
  for (let i = 0; i < array.length; i++) {
    const target = array[i];
    if (!dict[target]) continue;
    dict[target] = false;
    let left = target - 1;
    let right = target + 1;
    while (dict[left]) {
      dict[left] = false;
      left--;
    }
    while (dict[right]) {
      dict[right] = false;
      right++;
    }
    if (right - left - 2 >= result[1] - result[0]) {
      result = [left + 1, right - 1];
    }
  }

  return result;
}

console.log(largestRange([1]));
