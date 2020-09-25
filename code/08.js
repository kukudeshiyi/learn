// 链表相交
function getIntersectionNode(headA, headB) {
  let i = headA,
    j = headB;
  while (i || j) {
    if (i === j) return i;
    i = i === null ? headB : i.next;
    j = j === null ? headA : j.next;
  }
  return null;
}
