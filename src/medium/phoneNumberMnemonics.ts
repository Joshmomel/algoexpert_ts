const digitMap: { [key: string]: string[] } = {
  '1': ['1'],
  '2': ['a', 'b', 'c'],
  '3': ['d', 'e', 'f'],
  '4': ['g', 'h', 'i'],
  '5': ['j', 'k', 'l'],
  '6': ['m', 'n', 'o'],
  '7': ['p', 'q', 'r', 's'],
  '8': ['t', 'u', 'v'],
  '9': ['w', 'x', 'y', 'z'],
  '0': ['0'],
};

export function phoneNumberMnemonics(phoneNumber: string) {
  const digitList = phoneNumber.split('');
  let mnemonics: string[] = [];

  for (let i = 0; i < digitList.length; i++) {
    mnemonics = combine(mnemonics, digitMap[digitList[i]]);
  }

  return mnemonics;
}

function combine(arr1: string[], arr2: string[]) {
  let combineArr: string[] = [];

  if (!arr1.length || !arr2.length) {
    return [...arr1, ...arr2];
  }

  for (let i = 0; i < arr1.length; i++) {
    arr2.map((item) => combineArr.push(arr1[i] + item));
  }
  return combineArr;
}

phoneNumberMnemonics('1905');
