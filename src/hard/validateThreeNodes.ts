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

export function validateThreeNodes(nodeOne: BST, nodeTwo: BST, nodeThree: BST) {
  if (isTargetDescendant(nodeTwo, nodeOne.value)) {
    return isTargetDescendant(nodeThree, nodeTwo.value);
  }

  if (isTargetDescendant(nodeTwo, nodeThree.value)) {
    return isTargetDescendant(nodeOne, nodeTwo.value);
  }

  return false;
}

function isTargetDescendant(node: BST | null, target: number): boolean {
  if (node === null) return false;
  if (node.value === target) return true;

  return isTargetDescendant(node.left, target) || isTargetDescendant(node.right, target);
}

const root = new BST(5);
root.left = new BST(2);
root.right = new BST(7);
root.left.left = new BST(1);
root.left.right = new BST(4);
root.right.left = new BST(6);
root.right.right = new BST(8);
root.left.left.left = new BST(0);
root.left.right.left = new BST(3);

const nodeOne = root;
const nodeTwo = root.left;
const nodeThree = root.left.right.left;

console.log(validateThreeNodes(nodeOne, nodeTwo, nodeThree));
