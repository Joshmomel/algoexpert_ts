export function runLengthEncoding(string: string) {
  // Write your code here.
  let currentChar = string.charAt(0)
  let str = ''
  let counter = 1
  for (let i = 1; i < string.length + 1; i++) {
    if (currentChar === string.charAt(i) && counter < 9) {
      counter++
    } else {
      let res = counter + currentChar
      currentChar = string.charAt(i)
      counter = 1
      str += res
    }
  }

  return str;
}
