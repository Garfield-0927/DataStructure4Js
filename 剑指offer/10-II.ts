// dp[i] = dp[i-1] + 1 + dp[i-2] + 1

function numWays(n: number): number {
  if (n === 0) return 1;
  const MOD = 1000000007;
  const dp = new Array<number>(n + 1);
  dp[0] = 1;
  dp[1] = 1;

  for (let i = 2; i < dp.length; i++) {
    dp[i] = (dp[i - 2] + dp[i - 1]) % MOD;
  }
  return dp[n];
}