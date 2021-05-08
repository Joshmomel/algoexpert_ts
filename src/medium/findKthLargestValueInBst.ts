// This is an input class. Do not edit.
export class BST {
  value: number;
  left: BST | null;
  right: BST | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

export function findKthLargestValueInBst(tree: BST, k: number) {
  let sortedList: number[] = [];
  inorder(tree, sortedList);

  return sortedList[sortedList.length - k];
}

function inorder(node: BST | null, list: number[]) {
  if (node) {
    inorder(node.left, list);
    list.push(node.value);
    inorder(node.right, list);
  }
}

function makeBST() {
  const root = new BST(15);
  root.left = new BST(5);
  root.left.left = new BST(2);
  root.left.left.left = new BST(1);
  root.left.left.right = new BST(3);
  root.left.right = new BST(5);
  root.right = new BST(20);
  root.right.left = new BST(17);
  root.right.right = new BST(22);

  return root;
}

const tree = makeBST();

findKthLargestValueInBst(tree, 3);
