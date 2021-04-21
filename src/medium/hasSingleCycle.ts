export function hasSingleCycle(array: number[]) {
  // Write your code here.
  if (array.length === 0) return true;
  let visitedIndex = [];
  let visitedValue = [];
  visitedIndex.push(0);
  visitedValue.push(array[0]);
  for (let i = 1; i < array.length; i++) {
    let nextIndex = calculateIndex(
      visitedIndex[visitedIndex.length - 1],
      visitedValue[visitedValue.length - 1],
      array.length
    );
    if (visitedIndex.includes(nextIndex)) return false;
    visitedIndex.push(nextIndex);
    visitedValue.push(array[nextIndex]);
  }
  console.log('visited', visitedValue);
  return visitedValue.length === array.length;
}

function calculateIndex(index: number, value: number, length: number) {
  let calIndex = (index + value) % length;
  if (calIndex < 0) calIndex += length;
  return calIndex;
}
