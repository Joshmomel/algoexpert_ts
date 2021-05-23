type Disk = [number, number, number];

export function diskStacking(disks: Disk[]) {
  const maxList: number[] = [];
  let maxHeightIndex = 0

  const sortDisks = sortDiskByHeight(disks);
  console.log(sortDisks);
  sortDisks.forEach((item) => maxList.push(item[2]));

  for (let i = 0; i < disks.length; i++) {
    const to = disks[i];
    for (let j = 0; j < i; j++) {
      const from = disks[j];
      const total = maxList[j] + to[2]
      if (canStack(from, to) && maxList[i] < total) {
        console.log(`index at ${i} push ${from} to ${to} at maxList ${maxList[i]} total is ${total}`);
        maxList[i] = total
      }
    }
    if (maxList[i] >= maxList[maxHeightIndex]) maxHeightIndex = i
  }

  console.log(maxList);
  console.log(maxHeightIndex);



  return getList(maxList, disks, maxHeightIndex)
}

function sortDiskByHeight(disks: Disk[]): Disk[] {
  return disks.sort((a, b) => a[2] - b[2]);
}

function canStack(from: Disk, to: Disk): boolean {
  return from[0] < to[0] && from[1] < to[1] && from[2] < to[2];
}

function getList(maxList: number[], original: Disk[], index: number) {
  const list = []
  while (index > 0) {
    list.unshift(original[index])
    index = maxList.indexOf(maxList[index] - original[index][2])
  }
  return list
}

const disks = [
  [2, 1, 2],
  [3, 2, 3],
  [2, 2, 8],
  [2, 3, 4],
  [1, 3, 1],
  [4, 4, 5],
] as Disk[];

console.log(diskStacking(disks))
