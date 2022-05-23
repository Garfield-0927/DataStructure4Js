// var length = 10;

// function fn(){
//   console.log(this);
//   return this.length + 1;
// }

// var obj = {
//   length: 5,
//   test1: function(){
//     return fn();
//   }
// }

// obj.test2 = fn;

// console.log(obj.test1());
// console.log(obj.test2());
// console.log(fn() === obj.test2());

// var a = function(){
//   this.b = 3;
// }

// var c = new a();
// a.prototype.c = 9;

// var b = 7;
// a();
// console.log(c.__proto__ === a.prototype);
// console.log(b);
// console.log(c.b);

// var foo = () => {
//   console.log(this.a);
// };

// var a = 4;

// var obj = {
//   a: 2,
// };

// foo.call(obj);


async function async1(){
  console.log('async1 start');
  await async2();
  console.log('async1 end');
}

async function async2(){
  console.log('async2');
}

console.log('begin');

setTimeout(()=>{
  console.log('setTimeout0');
})

async1();

new Promise((res)=> {
  console.log('promise1');
  for(let i = 0; i < 1000; i++) {
    i === 99 && res();
  }
  console.log('promise2');
}).then(()=>{
  console.log('then1');
  setTimeout(()=>{
    console.log('setTimeout1 between promise1&2');
  })
}).then(()=>{
  console.log('promise3');
})

Promise.resolve().then(()=>{
  console.log('promise4');
})

console.log('end');
