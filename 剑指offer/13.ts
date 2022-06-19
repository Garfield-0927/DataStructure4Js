const getSum = (m: number): number => {
  const str = m.toString();
  let sum = 0;
  for (let i of str) {
    sum += parseInt(i);
  }
  return sum;
};

function movingCount(m: number, n: number, k: number): number {
  const canMove = (i: number, j: number) => {
    if (i < 0 || j < 0 || i >= m || j >= n) return false;
    const sum = getSum(i) + getSum(j);
    if (sum > k) return false;
    return true;
  };

  const arr = new Array<boolean[]>(m);
  for (let i = 0; i < m; i++) {
    arr[i] = new Array(n).fill(false);
  }
  let res = 1;
  const queue: [number, number][] = [];
  queue.push([0, 0]);
  while (queue.length) {
    // console.log(queue);
    // console.log(arr);

    const tup = queue.shift()!;
    const [i, j] = tup;
    arr[i][j] = true;
    canMove(i, j + 1) &&
      !arr[i][j + 1] &&
      !queue.find(([arrI, arrJ]) => arrI === i && arrJ === j + 1) &&
      queue.push([i, j + 1]) &&
      res++;
    canMove(i, j - 1) &&
      !arr[i][j - 1] &&
      !queue.find(([arrI, arrJ]) => arrI === i && arrJ === j - 1) &&
      queue.push([i, j - 1]) &&
      res++;
    canMove(i + 1, j) &&
      !arr[i + 1][j] &&
      !queue.find(([arrI, arrJ]) => arrI === i + 1 && arrJ === j) &&
      queue.push([i + 1, j]) &&
      res++;
    canMove(i - 1, j) &&
      !arr[i - 1][j] &&
      !queue.find(([arrI, arrJ]) => arrI === i - 1 && arrJ === j) &&
      queue.push([i - 1, j]) &&
      res++;
  }

  return res;
}

console.log(movingCount(3, 2, 17));
