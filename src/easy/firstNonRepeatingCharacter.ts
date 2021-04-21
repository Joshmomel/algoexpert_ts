export function firstNonRepeatingCharacter(string: string) {
  // Write your code here.

  let d1: { [key: string]: number } = {};
  let charList = string.split('');

  charList.forEach((item) => (d1[item] ? (d1[item] += 1) : (d1[item] = 1)));

  let i = 0;
  for (const [key, value] of Object.entries(d1)) {
    if (value === 1) return charList.indexOf(key);
    i++;
  }

  return -1;
}

console.log(firstNonRepeatingCharacter('faadabcbbebdf'));
