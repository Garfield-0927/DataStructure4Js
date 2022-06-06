function mySqrt(x: number): number {
  if (x === 0 || x === 1) return x;
  let start = 0;
  let end = Math.ceil(x / 2);

  while (start <= end) {
    console.log(start + '  ' + end);

    let mid = Math.ceil((start + end) / 2);
    if (
      mid * mid === x ||
      ((mid) * (mid) < x && (mid + 1) * (mid + 1) > x)
    ) {
      return mid;
    }

    if (mid * mid < x) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return 0;
}
// console.log(mySqrt(2));
// console.log(mySqrt(4));
// console.log(mySqrt(6));
// console.log(mySqrt(8));
// console.log(mySqrt(9));
console.log(mySqrt(20));
