export function reverseWordsInString(string: string) {
  let words = []
  for (let i = 0; i <= string.length; i++) {
    let word = ''
    while(string[i] !== ' ' && i < string.length) {
      word += string[i]
      i ++
    }
    words.unshift(word)
  }

  return words.join(' ');
}


reverseWordsInString('AlgoExpert is the best!')

