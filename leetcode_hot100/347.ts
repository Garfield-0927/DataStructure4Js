function topKFrequent(nums: number[], k: number): number[] {
  const map: Map<number, number> = new Map();
  for (const num of nums) {
    let count : number = map.get(num)==null ? 0 : map.get(num);
    map.set(num, count+1);
  }

  return [...map].sort((a,b)=>b[1]-a[1])
                 .map(item=>item[0])
                 .slice(0,k)
};