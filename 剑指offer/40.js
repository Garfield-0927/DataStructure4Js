// class PriorityQueue {
//   private static shiftDown(i: number, queue: number[]) {
//     let n = i;
//     while (n * 2 + 1 < queue.length) {
//       const left = n * 2 + 1;
//       const right = n * 2 + 2;
//       if (
//         queue[n] > queue[left] &&
//         (queue[right] == undefined || queue[n] > queue[right])
//       ) {
//         break;
//       }
//       let bigger: number;
//       if (queue[right] != undefined) {
//         bigger = queue[right] > queue[left] ? right : left;
//       } else {
//         bigger = left;
//       }
//       [queue[n], queue[bigger]] = [queue[bigger], queue[n]];
//       n = bigger;
//     }
//   }
//   queue: number[];
//   constructor(q?: number[]) {
//     if (q && q.length) {
//       const len = q.length;
//       for (let i = Math.floor((len - 1) / 2); i >= 0; i--) {
//         PriorityQueue.shiftDown(i, q);
//       }
//       this.queue = q;
//     } else {
//       this.queue = [];
//     }
//   }
//   peek() {
//     return this.queue[0];
//   }
// }
var getLeastNumbers = function (nums, k) {
    if (!nums.length) {
        return [];
    }
    if (k >= nums.length) {
        return nums;
    }
    var shiftDown = function (i, queue) {
        var _a;
        var n = i;
        while (n * 2 + 1 < queue.length) {
            var left = n * 2 + 1;
            var right = n * 2 + 2;
            if (queue[n] > queue[left] &&
                (queue[right] == undefined || queue[n] > queue[right])) {
                break;
            }
            var bigger = void 0;
            if (queue[right] != undefined) {
                bigger = queue[right] > queue[left] ? right : left;
            }
            else {
                bigger = left;
            }
            _a = [queue[bigger], queue[n]], queue[n] = _a[0], queue[bigger] = _a[1];
            n = bigger;
        }
    };
    var queue = nums.slice(0, k);
    var len = queue.length;
    for (var i = Math.floor((len - 1) / 2); i >= 0; i--) {
        shiftDown(i, queue);
    }
    for (var i = k; i < nums.length; i++) {
        if (nums[i] < queue[0]) {
            queue[0] = nums[i];
            shiftDown(0, queue);
        }
    }
    return queue;
};
// getLeastNumbers([6, 9, 11, 45, 67, 3, 2, 1], 5);
// getLeastNumbers([3, 2, 1], 2);
getLeastNumbers([0, 1, 2, 1], 1);
