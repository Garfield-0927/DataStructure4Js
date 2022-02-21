// function findTargetSumWays(nums: number[], target: number): number {
//   let res = 0;
//   const len = nums.length;
//   const bfs = (i: number, target: number) => {
//     if (i === len) {
//       if (!target) {
//         res++;
//       }
//       return;
//     }

//     bfs(i+1, target + nums[i]);
//     bfs(i+1, target - nums[i]);
//   };

//   bfs(0, target);

//   return res;
// }


function findTargetSumWays(nums: number[], target: number): number {
  let res = 0;
  const len = nums.length;
  const bfs = (i: number, target: number) => {
    if (i === len) {
      if (!target) {
        res++;
      }
      return;
    }

    bfs(i+1, target + nums[i]);
    bfs(i+1, target - nums[i]);
  };

  bfs(0, target);

  return res;
}
let res = findTargetSumWays([1, 1, 1, 1, 1], 3);
console.log(res);
