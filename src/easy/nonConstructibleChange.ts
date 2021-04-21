export function nonConstructibleChange(coins: number[]) {
  // Write your code here.
  const sorted = coins.sort((a, b) => a - b);
  let max = 0;

  for (let i = 0; i < sorted.length; i++) {
    if (sorted[i] > max + 1) return max + 1;
    max += sorted[i];
  }

  return max + 1;
}

console.log(nonConstructibleChange([5, 7, 1, 1, 2, 3, 22]));
