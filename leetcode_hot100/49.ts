function groupAnagrams(strs: string[]): string[][] {
  const map = new Map<string, string[]>();

  strs.forEach(str => {
    let tmpStr = str.split('').sort((a, b) => (a > b ? -1 : 1)).join('');
    if (map.has(tmpStr)) {
      map.set(tmpStr, [...map.get(tmpStr)!, str])
    } else {
      map.set(tmpStr, [str]);
    }
    
  });
  
  return Array.from(map.values());
}

groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])
