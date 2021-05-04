export function longestPalindromicSubstring(string: string) {
  let palindrom = '';
  if (string.length < 2) return string
  for (let i = 0; i <= string.length; i++) {
    let j = 1;
    while (i-j>=0 && string.charAt(i - j) === string.charAt(i + j)) {
      j++;
    }
    if (j+j > palindrom.length) palindrom = string.substring(i-j+1, i+j);

    j = 1;
    while (i-j>=0 && string.charAt(i - j) === string.charAt(i + j -1)) {
      j++;
    }
    if (j+j > palindrom.length) palindrom = string.substring(i-j +1 , i+j-1);

  }

  return palindrom;
}

console.log(longestPalindromicSubstring('noon'));
