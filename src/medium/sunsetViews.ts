export enum Direction {
  East = 'EAST',
  West = 'WEST',
}

export function sunsetViews(buildings: number[], direction: Direction) {

  let viewBuildings: number[] = []
  let indexArray: number[] = []

  if (direction === Direction.West) buildings.reverse()

  for (let i = 0; i < buildings.length; i++) {
    reconciler(viewBuildings, indexArray, buildings[i], i)
  }

  if (direction === Direction.West) {
    indexArray = indexArray.map(item => buildings.length - item - 1).reverse()
  }

  return indexArray
}

function reconciler(arr: number[], indexArray:number[], num: number, index:number) {
  for (let i = arr.length - 1; i >= 0 ; i--) {
    if (arr[i] > num) {
      arr.push(num)
      indexArray.push(index)
      break
    } else {
      indexArray.splice(i, 1)
      arr.splice(i, 1)
    }
  }
  if (arr.length < 1) {
    indexArray.push(index)
    arr.push(num)
  }
}




// console.log(reconciler([5,4,3,1], 3))

console.log(sunsetViews([3, 5, 4, 4, 3, 1, 3, 2], Direction.West));

