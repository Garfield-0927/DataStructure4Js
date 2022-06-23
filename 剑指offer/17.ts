function printNumbers(n: number): number[] {
  return new Array(Math.pow(10, n) - 1).fill(0).map((_, i) => i + 1);
}

console.log(printNumbers(2));
