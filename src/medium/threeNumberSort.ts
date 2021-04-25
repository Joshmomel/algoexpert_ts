export function threeNumberSort(array: number[], order: number[]) {
  let count = [0, 0, 0];

  for (let i = 0; i < array.length; i++) {
    count[order.indexOf(array[i])]++
  }

  for (let i = 0; i < array.length; i++) {
    if (i < count[0]) array[i] = order[0];
    else if (i < count[0] + count[1]) array[i] = order[1];
    else array[i] = order[2];
  }

  return array;
}

const array = [1, 0, 0, -1, -1, 0, 1, 1];
const order = [0, 1, -1];
console.log(threeNumberSort(array, order));
