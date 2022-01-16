function hammingDistance(x: number, y: number): number {
  let res = (x ^= y).toString(2).match(/1/g);

  return res == null ? 0 : res.length;
}

console.log(hammingDistance(1, 4));
