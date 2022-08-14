function findContinuousSequence(target: number): number[][] {
  const res: number[][] = [];
  const arr: number[] = [];
  for (let i = 0; i < Math.ceil(target / 2); i++) {
    arr.push(i + 1);
  }

  let i = 0;
  let j = 0;
  let sum = arr[0];

  while (j < arr.length) {
    if (sum === target) {
      j++;
      sum += arr[j]
      res.push(arr.slice(i, j));
    } else if (sum < target) {
      j++;
      sum += arr[j];
    } else {
      sum -= arr[i];
      i++;
    }
  }
  return res;
}

console.log(findContinuousSequence(15));

