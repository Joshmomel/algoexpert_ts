type CountDict = { [key: string]: number };

export function minimumCharactersForWords(words: string[]) {
  const maxDict: CountDict = {};
  const miniChars: string[] = []

  for (let i = 0; i < words.length; i++) {
    const wordChars = words[i].split('');
    const count: CountDict = {};
    for (let j = 0; j < wordChars.length; j++) {
      const c = wordChars[j];
      if (count[c]) {
        count[c]++;
      } else {
        count[c] = 1;
      }
    }
    Object.keys(count).forEach((c) => {
      if (!maxDict[c] || maxDict[c] < count[c]) maxDict[c] = count[c];
    });
  }

  for (const key in maxDict) {
    for (let i = 0; i < maxDict[key]; i++) {
      miniChars.push(key)
    }
  }

  return miniChars;
}

const words = ['this', 'that', 'did', 'deed', 'them!', 'a'];

minimumCharactersForWords(words);
