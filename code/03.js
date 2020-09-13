// To sum

function ToSum(nums, target) {
  const m = new Map();
  for (let i = 0; i < nums.length; i++) {
    const k = target - nums[i];
    if (Map.has(k)) {
      return [map.get(k), i];
    }
    map.set(nums[i], i);
  }
  return [];
}
