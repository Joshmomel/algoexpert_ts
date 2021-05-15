type Range = [number, number];

export function subarraySort(array: number[]): Range {
  const r: Range = [-1, array.length - 1];
  const origin = [...array];
  array.sort((a, b) => a - b);

  for (let i = 0; i < array.length; i++) {
    if (origin[i] != array[i] && r[0] === -1) r[0] = i;
    if (origin[i] == array[i] && r[0] !== -1 && r[1] === -1) {
      r[1] = i - 1;
    }
    if (origin[i] != array[i] && r[1] !== -1) r[1] = i;
  }

  return r[0] === -1 ? [-1, -1] : r;
}

console.log(subarraySort([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 2]));
