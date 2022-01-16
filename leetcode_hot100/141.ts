class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function hasCycle(head: ListNode | null): boolean {
  if (!head) {
    return false;
  }
  let ptr1 = head;
  let ptr2 = head.next;

  while (ptr1 && ptr2) {
    if (ptr1 === ptr2) {
      return true;
    }

    ptr1 = ptr1.next;

    if (ptr2.next) {
      ptr2 = ptr2.next.next;
    } else {
      return false;
    }
  }

  return false;
}
