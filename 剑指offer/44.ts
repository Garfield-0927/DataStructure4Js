function findNthDigit(n: number): number {
  if (n >= 0 && n < 10) {
    return n;
  }

  let idx = 9;
  let i = 1;
  while (idx < n) {
    idx += Math.pow(10, i) * 9 * (i + 1);
    i++;
  }
  const diff = idx - n;
  const gap = Math.floor(diff / i);
  const mod = diff % i;
  const end = Math.pow(10, i) - 1;
  const numStr = (end - gap).toString();
  return Number(numStr[numStr.length - 1 - mod])
}

console.log(findNthDigit(15));

