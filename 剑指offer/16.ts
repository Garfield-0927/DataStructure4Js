function myPow(x: number, n: number): number {
  const quickPow = (x: number, n: number): number => {
    if (n === 1) return x;
    if (n === 0) return 1;

    const half = Math.floor(n / 2);
    const rest = n % 2;

    const y = quickPow(x, half);
    return rest === 0 ? y * y : y * y * x;
  };

  return n >= 0 ? quickPow(x, n) : 1 / quickPow(x, -n);
}

myPow(2.0, 10);
