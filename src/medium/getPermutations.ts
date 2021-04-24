export function getPermutations(array: number[]) {
  if (array.length <1 ) return []

  let constructArray = new Array([array[0]])

  for (let i = 1; i < array.length; i++) {
    const newArrs = constructArray.map(arr => insert(array[i], arr))
    constructArray = newArrs.flat()
  }

  return constructArray;
}

function insert(num:number, array: number[]): number[][] {
  let list = []

  for (let i = 0; i <= array.length; i++) {
    const newArr = [...array]
    newArr.splice(i,0,num)
    list.push(newArr)
  }

  return list
}


console.log(getPermutations([1,2,3,4,5]).length)

