function minNumber(nums: number[]): string {
  return nums
    .map(String)
    .sort((a, b) => {
      if (a[0] !== b[0]) {
        return a[0] > b[0] ? 1 : -1;
      }
      
      return a.concat(b) > b.concat(a) ? 1 : -1;
    })
    .join('');
}

console.log(minNumber([3,30,34,5,9]));

