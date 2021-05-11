// This is an input class. Do not edit.
class AncestralTree {
  name: string;
  ancestor: AncestralTree | null;

  constructor(name: string) {
    this.name = name;
    this.ancestor = null;
  }

  addAsAncestor(descendants: AncestralTree[]) {
    for (const descendant of descendants) {
      descendant.ancestor = this;
    }
  }
}

export function getYoungestCommonAncestor(
  topAncestor: AncestralTree,
  descendantOne: AncestralTree,
  descendantTwo: AncestralTree
) {
  let ancestorListOne: AncestralTree[] = [descendantOne];
  let ancestorListTwo: AncestralTree[] = [descendantTwo];

  let p1 = descendantOne;
  while (p1.ancestor) {
    ancestorListOne.push(p1.ancestor);
    p1 = p1.ancestor;
  }

  let p2 = descendantTwo;
  while (p2.ancestor) {
    ancestorListTwo.push(p2.ancestor);
    p2 = p2.ancestor;
  }

  const common = ancestorListOne.filter((value) => ancestorListTwo.includes(value));

  return common.length > 0 ? common[0] : topAncestor;
}

function getTrees() {
  const trees: { [key: string]: AncestralTree } = {};
  const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  for (const letter of ALPHABET) {
    trees[letter] = new AncestralTree(letter);
  }
  trees['A'].addAsAncestor([trees['B'], trees['C']]);
  trees['B'].addAsAncestor([trees['D'], trees['E']]);
  trees['D'].addAsAncestor([trees['H'], trees['I']]);
  trees['C'].addAsAncestor([trees['F'], trees['G']]);
  return trees;
}

const trees = getTrees();

getYoungestCommonAncestor(trees.A, trees.T, trees.H);
