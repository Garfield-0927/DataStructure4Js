class LazyMan {
  constructor(name) {
    setTimeout(() => {
      console.log(`hi, ${name}`);
    })
  }

  eat(something) {
    setTimeout(() => {
      console.log(`eat, ${something}`);
    })
    return this
  }

  sleep(time) {
    setTimeout(()=>{
      console.log(`sleep ${time}s`);
      const now = Date.now()
      while (Date.now() - now < time * 1000) {
  
      }
      console.log(`awake after ${time}s`);
    })
    return this
  }

  sleepFirst(time){
    new Promise(res => {
      console.log(`sleep ${time}s`);
      const now = Date.now()
      while (Date.now() - now < time * 1000) {
  
      }
      res();
    }).then(()=>{
      console.log(`awake after ${time}s`);
    })
    return this;
  }



}

const lazyMan = new LazyMan("john").eat("launch").sleep(3).eat("dinner").sleepFirst(1)