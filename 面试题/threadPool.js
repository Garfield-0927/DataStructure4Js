function task1(cb) {
  setTimeout(() => {
    console.log(1);
    cb();
  }, 1000);
}
function task2(cb) {
  setTimeout(() => {
    console.log(2);
    cb();
  }, 2000);
}
function task3(cb) {
  setTimeout(() => {
    console.log(3);
    cb();
  }, 500);
}

// threadPollExe([task1,task1,task3],2)    // 1 3 2
// threadPollExe([task1,task1,task3],3)    // 3 1 2

function threadPollExe(arr, num) {
  let onGoing = 0;
  while (onGoing <= num && arr.length != 0) {
    onGoing++;
    arr[0]();

  }
}

threadPollExe([task1, task1, task3], 1); // 1 2 3
