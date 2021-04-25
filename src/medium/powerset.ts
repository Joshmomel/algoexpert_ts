export function powerset(array: number[]) {
  let constructArr: number[][] = [[]];

  for (let i = 0; i < array.length; i++) {
    const combineArr = combine(array[i], constructArr);
    constructArr = [...constructArr, ...combineArr]
  }

  return constructArr;
}

function combine(num: number, array: number[][]): number[][] {
  let combineArr: number[][] = [];

  for (let i = 0; i < array.length; i++) {
    combineArr.push([num, ...array[i]]);
  }

  return combineArr;
}

console.log(powerset([1,2,3]));
