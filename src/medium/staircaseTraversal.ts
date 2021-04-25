export function staircaseTraversal(height: number, maxSteps: number) {
  let combinations: { [key: number]: number } = {};

  for (let currentHeight = 1; currentHeight <= height; currentHeight++) {
    for (let step = 1; step <= Math.min(maxSteps, currentHeight); step++) {
      const diff = currentHeight - step;

      if (!combinations[diff]) combinations[diff] = 1;
      if (!combinations[currentHeight]) combinations[currentHeight] = 0;

      combinations[currentHeight] += combinations[diff]
    }
  }

  return combinations[height];
}

console.log(staircaseTraversal(4, 3));


/**
 * Below solution is NOT optimal. This calculate all the combinations rather only the numbers
 */
export function staircaseTraversal_S1(height: number, maxSteps: number) {
  let combinations: { [key: number]: number[][] } = {};

  for (let currentHeight = 1; currentHeight <= height; currentHeight++) {
    for (let step = 1; step <= Math.min(maxSteps, currentHeight); step++) {
      const diff = currentHeight - step;

      if (!combinations[diff]) combinations[diff] = [];

      const newCombine = add(combinations[diff], step);

      combinations[currentHeight] === undefined
        ? (combinations[currentHeight] = newCombine)
        : newCombine.forEach((item) => combinations[currentHeight].push(item));
    }
  }

  return combinations[height].length;
}

function add(toList: number[][], num: number) {
  if (toList.length < 1) return [[num]];

  let newAddList = [];
  for (let i = 0; i < toList.length; i++) {
    newAddList.push([...toList[i], num]);
  }

  return newAddList;
}

console.log(staircaseTraversal_S1(4, 3));
