export function tandemBicycle(
  redShirtSpeeds: number[],
  blueShirtSpeeds: number[],
  fastest: boolean
) {
  // Write your code here.

  const increase = (a: number, b: number) => a - b;
  const decrease = (a: number, b: number) => b - a;

  redShirtSpeeds.sort(increase);
  fastest ? blueShirtSpeeds.sort(decrease) : blueShirtSpeeds.sort(increase);

  let sum = 0;
  for (let i = 0; i < redShirtSpeeds.length; i++) {
    sum =
      redShirtSpeeds[i] > blueShirtSpeeds[i] ? sum + redShirtSpeeds[i] : sum + blueShirtSpeeds[i];
  }

  return sum;
}

console.log(tandemBicycle([5, 5, 3, 9, 2], [3, 6, 7, 2, 1], true));
