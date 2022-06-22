var hammingWeight = function (n: number) {
  let res = 0;
  let i = 1;
  while (i <= n) {
    if ((n & i) !== 0) {
      res++;
    }
    i = i * 2;
  }

  return res;
};

console.log(hammingWeight(4294967293));
