export function classPhotos(redShirtHeights: number[], blueShirtHeights: number[]) {
  // Write your code here.

  const numSort = (a: number, b: number) => a - b;

  redShirtHeights.sort(numSort);
  blueShirtHeights.sort(numSort);

  const initCompare = redShirtHeights[0] - blueShirtHeights[0] > 0;

  for (let i = 0; i < redShirtHeights.length; i++) {
    let nextCompare = redShirtHeights[i] - blueShirtHeights[i] >= 0;
    if (nextCompare && !initCompare) return false;
  }

  return true;
}

console.log(classPhotos([6, 9, 2, 4, 5, 1], [5, 8, 1, 3, 4, 9]));
