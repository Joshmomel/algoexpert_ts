export function minNumberOfCoinsForChange(n: number, denoms: number[]) {
  // Write your code here.
  const numOfCoins: number[] = new Array(n + 1).fill(Infinity)
  numOfCoins[0] = 0

  for (const denom of denoms) {
    for (let i = 0; i < n + 1; i++) {
      if (denom <= i) {
        numOfCoins[i] = Math.min(numOfCoins[i], numOfCoins[i - denom] + 1)
      }
    }
  }

  return numOfCoins[n] !== Infinity ? numOfCoins[n] : -1;
}


