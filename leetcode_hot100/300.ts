/**
 * 最长递增子序列
 * 动态规划思想
 * 假设dp[i]标识的是nums[0-i]中以num[i]为结尾的最长子序列长度
 * 那么dp方程为
 * dp[i] = max(nums[i] > nums[j] ? dp[j] + 1 : dp[j])
 */

function lengthOfLIS(nums: number[]): number {
  if (nums.length <= 1) return nums.length;

  const dp = new Array(nums.length).fill(1);
  let ans = 0;
  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      const tmp = nums[i] > nums[j] ? dp[j] + 1 : dp[i];
      dp[i] = Math.max(dp[i], tmp);
    }
    ans = Math.max(ans, dp[i]);
  }

  return ans;
}
lengthOfLIS([4, 10, 4, 3, 8, 9]);
