export function sortStack(stack: number[]) {
  if (stack.length === 0) return stack

  const num = stack.pop()!;

  sortStack(stack)
  compare(stack, num)

  return stack;
}

/**
 * given a sorted stack
 * inserted a new num to make a new sorted stack
 */
function compare(stack: number[], num: number) {
  const toCompare = stack.pop();

  if (toCompare === undefined) return stack.push(num);

  if (toCompare <= num) {
    stack.push(...[toCompare, num]);
  } else {
    compare(stack, num);
  }

  if (toCompare > num) stack.push(toCompare);
  return stack;
}

console.log(sortStack([-5, 2, -2, 4, 3, 1]));
