class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}
function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  const stack: ListNode[] = [];
  let ptr = head;
  while (ptr) {
    stack.push(ptr);
    ptr = ptr.next;
  }

  for (let i = 0; i < n; i++) {
    ptr = stack.pop();
  }

  if (!stack.length) {
    head = ptr.next
    return head;
  }

  let ptr2 = stack.pop();
  ptr2.next = ptr.next;

  return head;
}
