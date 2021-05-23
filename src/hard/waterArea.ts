export function waterArea(heights: number[]) {
  const leftList = leftCompare(heights);
  const rightList = rightCompare(heights)

  let waterList: number[] = [];
  for (let i = 0; i < heights.length; i++) {
    const minHeight = Math.min(leftList[i], rightList[i]);
    const h = heights[i];
    if (h < minHeight) waterList.push(minHeight - h);
  }

  return waterList.reduce((a, b) => a + b, 0);
}

function leftCompare(array: number[]) {
  let compareList: number[] = [0];
  let max = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
      compareList.push(max);
    } else {
      compareList.push(max);
    }
  }
  return compareList;
}

function rightCompare(array: number[]) {
  let rightList: number[] = [0];
  let rightMax = 0;
  for (let i = array.length - 1; i > 0; i--) {
    if (array[i] > rightMax) {
      rightMax = array[i];
      rightList.push(rightMax);
    } else {
      rightList.push(rightMax);
    }
  }
  return  rightList.reverse();
}

const heights = [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8];

waterArea(heights);
