// This is an input class. Do not edit.
export class BinaryTree {
  value: number;
  left: BinaryTree | null;
  right: BinaryTree | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

/**
 * This is the optimal solution
 */
export function heightBalancedBinaryTree(tree: BinaryTree | null) {
  return recur(tree) != -1
}

function recur(tree: BinaryTree | null): number {
  if (tree === null) return 0;

  const left = recur(tree.left);
  if (left === -1) return -1;

  const right = recur(tree.right);
  if (right === -1) return -1;

  return Math.abs(left - right) < 2 ? Math.max(left, right) + 1 : -1;
}


/**
 * This is the suboptimal solution but easy to think of
 */
export function heightBalancedBinaryTreeSubOptimal(tree: BinaryTree | null): boolean {
  if (tree === null) return true;

  return (
    Math.abs(depth(tree.left) - depth(tree.right)) <= 1 &&
    heightBalancedBinaryTreeSubOptimal(tree.left) &&
    heightBalancedBinaryTreeSubOptimal(tree.right)
  );
}

function depth(tree: BinaryTree | null): number {
  if (tree === null) return 0;

  return 1 + Math.max(depth(tree.left), depth(tree.right));
}

function makeTree() {
  const root = new BinaryTree(1);
  root.left = new BinaryTree(2);
  root.right = new BinaryTree(3);
  root.left.left = new BinaryTree(4);
  root.left.right = new BinaryTree(5);
  root.right.right = new BinaryTree(6);
  root.left.right.left = new BinaryTree(7);
  root.left.right.right = new BinaryTree(8);

  return root;
}

const tree = makeTree();
console.log(heightBalancedBinaryTree(tree));
