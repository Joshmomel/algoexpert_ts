export function maxSumIncreasingSubsequence(array: number[]): [number, number[]] {
  const maxList: number[] = [array[0]];
  const sequenceList: number[][] = [[array[0]]];

  const withCurrentSequenceMap: { [key: number]: number } = {};
  withCurrentSequenceMap[array[0]] = array[0];
  const withCurrentSequenceList: number[][] = [[array[0]]];

  for (let i = 1; i < array.length; i++) {
    const lastMax = maxList[maxList.length - 1];
    const lastSequence = sequenceList[sequenceList.length - 1];

    const withCurrentMax = getMaxWithCurrent(withCurrentSequenceMap, array[i]);
    withCurrentSequenceMap[array[i]] = withCurrentMax.maxNum;
    if (withCurrentMax.maxKey === -1) withCurrentMax.maxKey = array[i];

    if (withCurrentMax.maxKey === array[i]) {
      withCurrentSequenceList.push([array[i]]);
    } else {
      const preSequenceList =
        withCurrentSequenceList[findLastIndex(array, withCurrentMax.maxKey, i)];
      withCurrentSequenceList.push([...preSequenceList, array[i]]);
    }

    if (withCurrentMax.maxNum < lastMax) {
      maxList.push(lastMax);
      sequenceList.push(lastSequence);
    } else {
      maxList.push(withCurrentMax.maxNum);
      sequenceList.push(withCurrentSequenceList[withCurrentSequenceList.length - 1]);
    }
  }

  const maxInArray = Math.max(...maxList);
  const index = maxList.indexOf(maxInArray);

  return [maxInArray, sequenceList[index]];
}

interface MaxWithCurrent {
  maxKey: number;
  maxNum: number;
}
function getMaxWithCurrent(map: { [key: number]: number }, num: number): MaxWithCurrent {
  let max: number | undefined;
  for (const [key] of Object.entries(map)) {
    if (Number(key) >= num) continue;
    if (!max || (Number(key) > max && map[Number(key)] > map[max])) max = Number(key);
  }

  if (max && map[max] > 0) {
    return { maxKey: max, maxNum: map[max] + num };
  } else {
    return { maxKey: -1, maxNum: num };
  }
}

function findLastIndex(array: number[], target: number, limitTo: number): number {
  const arr = array.map((item, index) => {
    if (item === target && index <= limitTo) return index;
    else return -1;
  });

  return Math.max(...arr);
}

const array = [10, 15, 4, 5, 11, 14, 31, 25, 31, 23, 25, 31, 50];

console.log(maxSumIncreasingSubsequence(array));
