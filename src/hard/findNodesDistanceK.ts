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

interface NodeDistance {
  node: BinaryTree;
  value: number;
  distance: number;
}

export function findNodesDistanceK(tree: BinaryTree, target: number, k: number) {
  const parentMap: ParentMap = {};

  getParentMap(tree, parentMap);

  let targetNode = getTargetNode(tree, target)!!;

  const queue: NodeDistance[] = [{ node: targetNode, value: targetNode.value, distance: 0 }];
  const visited: Set<BinaryTree> = new Set().add(targetNode) as Set<BinaryTree>;

  while (queue.length > 0 && queue[0].distance !== k) {
    const item = queue.shift()!!;
    const itemNodeParent = parentMap[item.node.value];
    const nodeLeft = item.node.left;
    const nodeRight = item.node.right;
    const distance = item.distance + 1;

    if (itemNodeParent && !visited.has(itemNodeParent)) {
      queue.push({ node: itemNodeParent, value: itemNodeParent.value, distance });
      visited.add(itemNodeParent);
    }

    if (nodeLeft && !visited.has(nodeLeft)) {
      queue.push({ node: nodeLeft, value: nodeLeft.value, distance });
      visited.add(nodeLeft);
    }

    if (nodeRight && !visited.has(nodeRight)) {
      queue.push({ node: nodeRight, value: nodeRight.value, distance });
      visited.add(nodeRight);
    }
  }

  return queue.map((item) => item.value);
}

interface ParentMap {
  [key: number]: BinaryTree;
}
function getParentMap(node: BinaryTree | null, parentMap: ParentMap) {
  if (node === null) return;

  if (node.left) parentMap[node.left.value] = node;
  getParentMap(node.left, parentMap);
  if (node.right) parentMap[node.right.value] = node;
  getParentMap(node.right, parentMap);
}

function getTargetNode(root: BinaryTree | null, target: number): BinaryTree | null {
  if (root === null) return null;
  if (root.value === target) return root;

  return getTargetNode(root.left, target) ?? getTargetNode(root.right, target);
}

const root = new BinaryTree(1);
root.left = new BinaryTree(2);
root.right = new BinaryTree(3);
root.left.left = new BinaryTree(4);
root.left.right = new BinaryTree(5);
root.right.right = new BinaryTree(6);
root.right.right.left = new BinaryTree(7);
root.right.right.right = new BinaryTree(8);

console.log(findNodesDistanceK(root, 3, 2));
