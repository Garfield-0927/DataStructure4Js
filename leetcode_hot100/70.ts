function climbStairs(n: number): number {
  const res = new Array(n + 2);
  res[1] = 1;
  res[2] = 2;
  for (let i = 3; i < n + 2; i++) {
    res[i] = res[i - 2] + res[i - 1];
  }
  return res[n];
}

console.log(climbStairs(45));
