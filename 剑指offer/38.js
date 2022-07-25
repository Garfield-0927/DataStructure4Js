var premutation = function (s) {
    if (!s.length)
        return [];
    var res = new Set();
    var bfs = function (s, cur) {
        if (!s.length) {
            res.add(cur);
            return;
        }
        for (var i = 0; i < s.length; i++) {
            var rest = s.substring(0, i) + s.substring(i + 1);
            bfs(rest, cur + s.charAt(i));
        }
    };
    bfs(s, '');
    return Array.from(res);
};
premutation('bbc');
