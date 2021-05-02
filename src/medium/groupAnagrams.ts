/**
 * Best solution when refer to answer
 * Use hash map
 */
export function groupAnagrams(words: string[]) {
  let map: { [key: string]: string[] } = {};

  for (let i = 0; i < words.length; i++) {
    const word = words[i]
      .split('')
      .sort((a, b) => a.localeCompare(b))
      .join('');
    if (map[word]) {
      map[word].push(words[i])
    } else {
      map[word] = [words[i]]
    }
  }

  return map
}

console.log(groupAnagrams(['yo', 'act', 'flop', 'tac', 'foo', 'cat', 'oy', 'olfp']));


/**
 * My solution without refer to answer
 */
export function groupAnagramsB(words: string[]) {
  let groupList = []
  const sortedWords = words.map((item) =>
    item
      .split('')
      .sort((a, b) => a.localeCompare(b))
      .join('')
  );

  let total: (number | null)[] = [];
  for (let i = 0; i < sortedWords.length; i++) {
    const shift = sortedWords[i];
    const group = sortedWords
      .map((item, index) => (item === shift ? index : null))
      .filter((item) => item !== null);

    if (total.includes(group[0])) continue

    total.push(...group)

    let toWords = []
    for (let j = 0; j < group.length; j++) {
      const num = group[j]
      // @ts-ignore
      toWords.push(words[num])
    }

    groupList.push(toWords)

  }

  return groupList;
}

console.log(groupAnagramsB(['yo', 'act', 'flop', 'tac', 'foo', 'cat', 'oy', 'olfp']))
