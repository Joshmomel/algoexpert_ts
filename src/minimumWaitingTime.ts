export function minimumWaitingTime(queries: number[]) {
  // Write your code here.
  queries.sort((a, b) => a - b)
  let accumulate = new Array(queries.length).fill(0)
  for (let i = 1; i < queries.length; i++) {
    accumulate[i] = queries[i - 1] + accumulate[i - 1]
  }

  return accumulate.reduce((a, b) => a + b, 0);
}