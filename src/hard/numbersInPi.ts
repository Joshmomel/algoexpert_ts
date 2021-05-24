type Dict = { [key: number]: number };
type NumberTable = { [key: string]: boolean };

export function numbersInPi(pi: string, numbers: string[]) {
  const dict: Dict = {};
  const numberTable: NumberTable = {};

  for (const number of numbers) {
    numberTable[number] = true;
  }

  for (let i = pi.length - 1; i >= 0; i--) {
    console.log('parent call for i', i);
    getMinSpace(pi, numberTable, dict, i);
  }

  console.log('dict is', dict);
}

function getMinSpace(pi: string, numberTable: NumberTable, dict: Dict, index: number):number {
  console.log(`getMinSpace for index ${index}`);
  if (index === pi.length) return -1;
  if (index in dict) return dict[index];

  let minSpace = Infinity;
  for (let i = index; i < pi.length; i++) {
    const prefix = pi.slice(index, i + 1);
    console.log('prefix is', prefix);
    if (prefix in numberTable) {
      const minSuffix = getMinSpace(pi, numberTable, dict, i + 1);
      minSpace = Math.min(minSpace, minSuffix + 1)
      console.log('minSpace is ', minSpace);
    }
  }
  console.log(`dict[${index}] = ${minSpace}`);
  console.log('dict is', dict);
  dict[index] = minSpace

  return dict[index]
}

const pi = '3141592';
const numbers = ['3141', '5', '31', '2', '4159', '9', '42'];

numbersInPi(pi, numbers);
