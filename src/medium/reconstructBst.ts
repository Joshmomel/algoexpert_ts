// This is an input class. Do not edit.
export class BST {
  value: number;
  left: BST | null;
  right: BST | null;

  constructor(value: number, left: BST | null = null, right: BST | null = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

// export function reconstructBst(preOrderTraversalValuesTraversalValues: number[]): BST | null {
//   // Write your code here.
//
//   return root;
// }

function reconstructBst(preOrderTraversalValues: number[]): BST | null {
  if (preOrderTraversalValues.length === 0) return null;

  let rightIndex = preOrderTraversalValues.length;

  for (let i = 1; i < preOrderTraversalValues.length; i++) {
    const v = preOrderTraversalValues[i];
    if (v >= preOrderTraversalValues[0]) {
      rightIndex = i;
      break;
    }
  }

  return new BST(
    preOrderTraversalValues[0],
    reconstructBst(preOrderTraversalValues.slice(1, rightIndex)),
    reconstructBst(preOrderTraversalValues.slice(rightIndex))
  );
}

const preOrderTraversalValuesTraversalValues = [10, 4, 2, 1, 5, 17, 19, 18];

// console.log(right(0, [10, 8]));

// const tree = reconstructBst(preOrderTraversalValuesTraversalValues);
// console.log(tree);

const tree = reconstructBst(preOrderTraversalValuesTraversalValues);
console.log(tree);
