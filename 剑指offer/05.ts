function replaceSpace(s: string): string {
  let res = '';
  for (let i = 0; i < s.length; i++) {
    if (s[i] === ' ') {
      res = res.concat('%20');
    } else {
      res = res.concat(s[i]);
    }
  }
  return res;
}
