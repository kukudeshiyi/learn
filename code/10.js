// 买卖股票的最大收益
// 寻找子问题
// 假设第二天卖出的收益为 dp[i]

// 找出子问题之间的关系
// dp[i] = Max(dp[i-1],peices[i]-min(i-1))

// 处理边界情况
// dp[0] = 0; max = 0

const prices = [7, 1, 5, 3, 6, 4];

function maxProfit(prices) {
  let max = 0,
    minPrice = prices[0];
  for (let i = 0; i < prices.length; i++) {
    max = Math.max(max, prices[i] - minPrice);
    min = Math.min(prices[i], minPrice);
  }
  return max;
}
