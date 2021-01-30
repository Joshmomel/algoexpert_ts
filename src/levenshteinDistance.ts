export function levenshteinDistance(str1: string, str2: string) {
  // Write your code here.

  const matrix = new Array(str1.length+1).fill(0).map(() => new Array(str2.length+1).fill(0));

  for (let i = 0; i < str1.length+1; i++) {
    matrix[i][0] = i
    for (let j = 1; j < str2.length+1; j++) {
      if (i===0) {
        matrix[i][j] = j
      } else if (str1[i-1] === str2[j-1]) {
        matrix[i][j] = matrix[i-1][j-1]
      } else {
        matrix[i][j] = Math.min(matrix[i-1][j], matrix[i][j-1], matrix[i-1][j-1]) + 1
      }
    }
  }

  return matrix[str1.length][str2.length];
}

let res = levenshteinDistance("abcdefghij", "1234567890")
console.log(res)