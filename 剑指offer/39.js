var majorityNumber = function (nums) {
    var getRandom = function (min, max) {
        return Math.round(Math.random() * (max - min) + min);
    };
    var len = nums.length;
    var minNum = len / 2;
    var appearNum = function (num) {
        var cnt = 0;
        nums.forEach(function (n) {
            n === num && cnt++;
        });
        return cnt;
    };
    while (true) {
        var random = getRandom(0, len - 1);
        var cnt = appearNum(nums[random]);
        if (cnt > minNum) {
            return nums[random];
        }
    }
};
