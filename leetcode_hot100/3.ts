function lengthOfLongestSubstring(s: string): number {
  if (!s) {
    return 0;
  }

  let i = 0;

  let queue: string[] = [];
  let ans = 0;
  while (i < s.length) {
    if (!queue.includes(s[i])) {
      queue.push(s[i]);
    } else {
      while (queue.shift() !== s[i]) {}
      queue.push(s[i]);
    }
    ans = Math.max(ans, queue.length);
    i++;
  }
  return ans;
}

lengthOfLongestSubstring('bbbbb');
lengthOfLongestSubstring('abcabcbb');
lengthOfLongestSubstring('pwwkew');
