const premutation = (s: string) => {
  if (!s.length) return [];

  const res = new Set<string>();

  const bfs = (s: string, cur: string) => {
    if (!s.length) {
      res.add(cur);
      return;
    }

    for (let i = 0; i < s.length; i++) {
      const rest = s.substring(0, i) + s.substring(i + 1);
      bfs(rest, cur + s.charAt(i));
    }
  };

  bfs(s, '');

  return Array.from(res);
};