interface TrieNode {
  [key: string]: TrieNode | boolean;
}

// Do not edit the class below except for the
// populateSuffixTrieFrom and contains methods.
// Feel free to add new properties and methods
// to the class.
export class SuffixTrie {
  root: TrieNode;
  endSymbol: string;

  constructor(string: string) {
    this.root = {};
    this.endSymbol = '*';
    this.populateSuffixTrieFrom(string);
  }

  populateSuffixTrieFrom(string: string) {
    // Write your code here.
    for (let i = 0; i < string.length; i++) {
      const subStr = string.split('').splice(i).join('');
      this.helper(subStr, this.root);
    }
  }

  helper(string: string, node: TrieNode) {
    const front = string[0];

    if (string.length < 1) return node[this.endSymbol] = true;

    const subStr = string.split('').splice(1).join('');

    if (!node[front]) node[front] = {};

    this.helper(subStr, node[front] as TrieNode);
  }

  contains(string: string) {
    let node = this.root
    for(const letter of string) {
      if (!(letter in node)) return false
      node = node[letter] as TrieNode
    }
    return this.endSymbol in node
  }
}

const st = new SuffixTrie('test');
const contains = st.contains('tes');
console.log(JSON.stringify(st));
console.log(contains);
