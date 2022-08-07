function lengthOfLongestSubstring(s: string): number {
  let curStr = '';
  let maxLength = 0;
  const len = s.length;
  for (let i = 0; i < len; i++) {
    const ch = s.charAt(i);
    const idx = curStr.indexOf(ch);
    if (idx >= 0) {
      maxLength = Math.max(maxLength, curStr.length);
      curStr = curStr.slice(idx + 1);
    }
    curStr += ch;
  }
  return Math.max(maxLength, curStr.length);
}

console.log(lengthOfLongestSubstring('abcabcbb'));
console.log(lengthOfLongestSubstring('bbbbb'));
console.log(lengthOfLongestSubstring('pwwkew'));