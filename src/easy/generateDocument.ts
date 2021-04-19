export function generateDocument(characters: string, document: string) {
  let d1: { [key: string]: number } = {};
  let d2: { [key: string]: number } = {};

  characters.split('').forEach((item) => (d1[item] ? (d1[item] += 1) : (d1[item] = 1)));
  document.split('').forEach((item) => (d2[item] ? (d2[item] += 1) : (d2[item] = 1)));

  for (const [key, value] of Object.entries(d2)) {
    if (d1[key] === undefined || d1[key] < value) return false;
  }
  return true;
}

console.log(generateDocument('A ', 'a'));
