export function balancedBrackets(string: string) {
  string.split('');

  let stack = [];

  for (let i = 0; i < string.length; i++) {
    if (!isBracket(string[i])) continue;
    if (left(string[i])) {
      stack.push(string[i]);
    } else {
      const popValue = stack.pop();
      if (!popValue || !match(popValue, string[i])) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

const left = (v: string) => v.match(/[[({]/);
const isBracket = (v: string) => v.match(/[}\])({\[]/);

function match(popValue: string, compareValue: string) {
  if (popValue === '(') return compareValue === ')';
  if (popValue === '[') return compareValue === ']';
  if (popValue === '{') return compareValue === '}';
  return false;
}

console.log(balancedBrackets('('));
