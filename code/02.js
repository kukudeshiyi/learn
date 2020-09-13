//  滑动窗口最大值
//  双端队列
function slidingWindow(nums, k) {
  const length = nums.length;
  const queue = [];
  const result = []; // 存放的是数组index
  for (let i = 0; i < length; i++) {
    // delete
    if (queue[0] <= i - k) {
      queue.shift();
    }
    // add
    while (nums[queue[queue.length - 1]] <= nums[i]) {
      queue.pop();
    }
    queue.push(i);
    if (i >= k - 1) {
      result.push(nums[queue[0]]);
    }
  }
  return result;
}
console.log(slidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3));
