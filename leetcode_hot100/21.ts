class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}
function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  let ptr1 = list1;
  let ptr2 = list2;

  let head: ListNode;

  if (!ptr1 && !ptr2) {
    return null;
  } else if (!ptr1) {
    return ptr2;
  } else if (!ptr2) {
    return ptr1;
  } else {
    if (ptr1.val >= ptr2.val) {
      head = ptr2;
      ptr2 = ptr2.next;
    } else {
      head = ptr1;
      ptr1 = ptr1.next;
    }
  }

  let cur = head;
  while (ptr1 && ptr2) {
    if (ptr1.val >= ptr2.val) {
      cur.next = ptr2;
      cur = cur.next;
      ptr2 = ptr2.next;
    } else {
      cur.next = ptr1;
      cur = cur.next;
      ptr1 = ptr1.next;
    }
  }

  cur.next = ptr1 == null ? ptr2 : ptr1;

  return head;
}
