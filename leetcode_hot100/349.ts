function intersection(nums1: number[], nums2: number[]): number[] {
  let set : Set<number> = new Set(nums1);
  return [...set].filter(num=>nums2.indexOf(num)!==-1);
};