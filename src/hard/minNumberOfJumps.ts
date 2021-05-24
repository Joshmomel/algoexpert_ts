export function minNumberOfJumps(array: number[]) {
  const stepList = new Array(array.length).fill(0);
  stepList[0] = 1;

  for (let i = 0; i < array.length; i++) {
    const step = array[i];
    console.log('step is ', step);
    for (let j = i + 1; j <= i + step; j++) {
      console.log(`i is ${i} j is ${j}`);
      if (stepList[j] < stepList[i]) stepList[j] = stepList[i] + 1;
    }
    console.log('stepList', stepList);
  }

  return stepList[stepList.length - 1] - 1;
}

minNumberOfJumps([3, 4, 2, 1, 2, 3, 7, 1, 1, 1, 3]);
