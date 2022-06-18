function fib(n: number): number {
  if (n === 0) return 0;
  if (n === 1) return 1;
  const dp = new Array<number>(n + 1);
  const MOD = 1000000007;
  dp[0] = 0;
  dp[1] = 1;
  for (let i = 2; i <= n; i++) {
    dp[i] = (dp[i - 1] + dp[i - 2]) % MOD;
  }

  return dp.pop()!;
}

console.log(fib(45));
