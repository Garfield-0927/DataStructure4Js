function merge(intervals: number[][]): number[][] {
  intervals.sort((a, b) => a[0] - b[0]);
  const res = [];
  let left;
  let right;
  for (let i = 0; i < intervals.length; ) {
    if (i === intervals.length - 1) {
      res.push([intervals[i][0], intervals[i][1]]);
      break;
    }
    let j = i + 1;
    left = intervals[i][0];
    right = intervals[i][1];
    while (j < intervals.length && right >= intervals[j][0]) {
      if (right <= intervals[j][1]) {
        right = intervals[j][1];
      }
      j++;
    }
    i = j;
    res.push([left, right]);
  }
  return res;
}

console.log(
  merge([
    [1, 4],
    [4, 5],
  ])
);
