export function longestCommonSubsequence(str1: string, str2: string) {
  const matrix: string[][] = [];

  for (let i = 0; i < str2.length + 1; i++) {
    const row = new Array(str1.length + 1).fill([]);
    matrix.push(row);
  }

  console.log(matrix);

  for (let i = 1; i < str2.length + 1; i++) {
    for (let j = 1; j < str1.length + 1; j++) {
      if (str2[i - 1] === str1[j - 1]) {
        matrix[i][j] = matrix[i - 1][j - 1].concat(str2[i - 1]);
      } else {
        matrix[i][j] =
          matrix[i - 1][j].length > matrix[i][j - 1].length ? matrix[i - 1][j] : matrix[i][j - 1];
      }
    }
  }
  return matrix[str2.length][str1.length];
}

const str1 = 'ab';
const str2 = 'acd';

console.log(longestCommonSubsequence(str1, str2));
