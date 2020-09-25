// 判断单链表是否有环
// 标志法
// JSON.stringify 在format循环引用的对象时候会报错
// 快慢指针
const head = {
  value: 1,
  next: {
    value: 2,
  },
};
head.next.next = head;

function hasCircle(head) {
  if (!head || !head.next) return false;
  let slow = head.next,
    fast = head.next.next;
  while (fast !== slow) {
    if (!fast || !fast.next) return false;
    fast = fast.next.next;
    slow = slow.next;
  }
  return true;
}

hasCircle(head);
