export function cycleInGraph(edges: number[][]) {
  let v;
  for (let i = 0; i < edges.length; i++) {
    v = nextHelper(i, edges, []);
    if (v[0] === v[v.length - 1] && v.length > 1) return true;
  }

  return false;
}

function nextHelper(current: number, edges: number[][], visit: number[]): number[] {
  if (visit.includes(current)) {
    visit.push(current);
    return visit;
  }

  visit.push(current);

  const next = edges[current];
  for (let i = 0; i < next.length; i++) {
    const v = nextHelper(next[i], edges, visit);
    if (v[0] === v[v.length - 1]) break;
  }

  return visit;
}

const edges = [[1, 2], [2], []];

console.log(nextHelper(0, edges, []));

console.log(cycleInGraph(edges));
