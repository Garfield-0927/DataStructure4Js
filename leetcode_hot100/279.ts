function numSquares(n: number): number {
  const arr: number[] = [];
  arr[0] = 0;
  for (let i = 1; i <= n; i++) {
    if (Number.isInteger(Math.pow(i, 0.5))) {
      arr[i] = 1;
    } else {
      arr[i] = +Infinity;
      for (let j = 1; j <= i / 2; j++) {
        arr[i] = Math.min(arr[i], arr[i - j] + arr[j]);
      }
    }
  }
  
  return arr[n];
}


console.log(numSquares(12));
