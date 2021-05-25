export function nextGreaterElement(array: number[]) {
  const list: number[] = new Array(array.length).fill(-1);
  const stack: number[] = [];

  for (let i = 0; i < 2 * array.length; i++) {
    const index = i % array.length;

    while (stack.length > 1 && array[index] > array[stack[stack.length - 1]]) {
      const popIndex = stack.pop()!!;
      list[popIndex] = array[index];
    }

    stack.push(index);
  }

  return list;
}

const array = [2, 5, -3, -4, 6, 7, 2];

nextGreaterElement(array);
