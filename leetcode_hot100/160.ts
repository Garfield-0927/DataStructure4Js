function getIntersectionNode(
  headA: ListNode | null,
  headB: ListNode | null
): ListNode | null {
  if (!headA || !headB) {
    return null;
  }

  let ca = 0,
    cb = 0;
  
  let node = headA, node2 = headB
  while(node.next) {
    ca++;
    node = node.next;
  }

  while(node2.next) {
    cb++;
    node2 = node2.next;
  }

  if(node !== node2) {
    return null;
  }

  let gap = Math.abs(ca - cb);

  node = headA;
  node2 = headB;
  if(ca > cb) {
    while(gap) {
      node = node.next;
      gap--;
    }  
  } else {
    while(gap) {
      node2 = node2.next;
      gap--;
    }  
  }

  while(node !== node2) {
    node = node.next;
    node2 = node2.next;
  }
  return node;

}
