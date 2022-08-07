function nthUglyNumber(n: number): number {
  const dp = new Array<number>(n + 1).fill(0);
  dp[1] = 1;
  let i, j, k;
  i = j = k = 1;
  for (let m = 2; m < n + 1; m++) {
    const num1 = dp[i] * 2;
    const num2 = dp[j] * 3;
    const num3 = dp[k] * 5;
    const nextNum = Math.min(num1, num2, num3);
    dp[m] = nextNum;
    if (nextNum === num1) {
      i++;
    } 
    if (nextNum === num2) {
      j++;
    } 
    if (nextNum === num3) {
      k++;
    }
  }
  console.log(dp);
  
  return dp[n];
}

nthUglyNumber(10)