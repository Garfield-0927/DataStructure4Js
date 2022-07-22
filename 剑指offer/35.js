/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */

const map = new Map();
var copyRandomList = function (head) {
  if (!head) return null;

  let originalNode = head;
  let newHead;

  const copyNode = onode => {
    if (!map.has(onode)) {
      map.set(onode, new Node(onode.val, null, null));
    }
    return map.get(onode);
  };
  while (originalNode) {
    const node = copyNode(originalNode);

    if(originalNode === head) {
      newHead = node;
    }

    if(originalNode.next) {
      let next = copyNode(originalNode.next);
      node.next = next;
    }

    if(originalNode.random) {
      let random = copyNode(originalNode.random);
      node.random = random;
    }

    originalNode = originalNode.next;
  }

  return newHead;
};
