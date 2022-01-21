function wordBreak(s: string, wordDict: string[]): boolean {
  const dp = new Array<boolean>(s.length + 1).fill(false);
  dp[0] = true;

  for (let i = 0; i < s.length; i++) {
    if (dp[i]) {
      for (let j = i + 1; j < s.length+1; j++) {
        const str = s.substring(i,j)
        if (wordDict.includes(str)) {
          dp[j] = true
        }
        
      }
    }
  }
  
  return dp[s.length];
}


wordBreak("catsandog", ["cats", "dog", "sand", "and", "cat"]);