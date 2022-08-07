function firstUniqChar(s: string): string {
  if (!s) return ' ';
  const map = new Map<string, number>();
  const len = s.length;
  for (let i = len - 1; i >= 0; i--) {
    const ch = s.charAt(i);
    const num = map.get(ch);
    num == undefined ? map.set(ch, 1) : map.set(ch, num + 1);
  }
  let c;
  map.forEach((v, k) => {
    if (v === 1) {
      c = k;
      return;
    }
  });
  return c ?? ' ';
}
