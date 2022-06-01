class Trie {
  childrenTrie: Trie[];
  isEnd: boolean;
  char: string;
  constructor() {
    this.childrenTrie = [];
    this.isEnd = false;
    this.char = '';
  }

  insert(word: string): void {
    if (!word.length) return;
    const char = word[0];
    let childTrie = this.childrenTrie.find(item => item.char === char);
    if (!childTrie) {
      childTrie = new Trie();
      childTrie.char = char;
    }
    if (word.length === 1) {
      childTrie.isEnd = true;
    }
    this.childrenTrie.push(childTrie);
    return childTrie.insert(word.slice(1));
  }

  search(word: string): boolean {
    const char = word[0];
    const childTrie = this.childrenTrie.find(item => item.char === char);
    if (childTrie) {
      if (word.length === 1) {
        return childTrie.isEnd;
      }
      return childTrie.search(word.slice(1));
    }
    return false;
  }

  startsWith(prefix: string): boolean {
    const char = prefix[0];
    const childTrie = this.childrenTrie.find(item => item.char === char);
    if (childTrie) {
      if (prefix.length === 1) {
        return true;
      }
      return childTrie.startsWith(prefix.slice(1));
    }
    return false;
  }
}

const trie = new Trie();
trie.insert('a');
console.log(trie.search('a')); // 返回 True
console.log(trie.startsWith('a')); // 返回 True
// console.log(trie.char);
// console.log(trie.childrenTrie[0].char);
// console.log(trie.childrenTrie[0].childrenTrie[0].char);
// console.log(trie.childrenTrie[0].childrenTrie[0].childrenTrie[0].char);
// console.log(
//   trie.childrenTrie[0].childrenTrie[0].childrenTrie[0].childrenTrie[0].char
// );
// console.log(
//   trie.childrenTrie[0].childrenTrie[0].childrenTrie[0].childrenTrie[0]
//     .childrenTrie[0].char
// );
// console.log(
//   trie.childrenTrie[0].childrenTrie[0].childrenTrie[0].childrenTrie[0]
//     .childrenTrie[0].isEnd
// );
