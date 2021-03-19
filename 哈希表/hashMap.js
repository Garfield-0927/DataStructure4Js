function hashFn(str, size){
  let hashcode = 37;
  for (let i = 0; i < str.length; i++) {
    hashcode = hashcode * 37 + str.charCodeAt(i);
  }
  return hashcode % size;
}


class hashTable{
  constructor(size){
    this.storage = [];
    this.count = 0;
    this.MaxSize = size;
  }


  // 增 、 改
  put(key, val){
    let index = hashFn(key, this.MaxSize);
    let bucket = this.storage[index];

    // 增
    if (bucket == null) {
      bucket = [];
      this.storage[index] = bucket;
      bucket.push([key, val]);
      this.count++;
      return true;
    } else {
      let isFind = bucket.findIndex(item=>{
        return item[0] === key;
      })

      if (isFind === -1) {
        bucket.push([key, val]);
        this.count++;
      } else {
        bucket[isFind][1] = val;
      }

      return true;
    }
  }

  // 查
  find(key){
    let index = hashFn(key, this.MaxSize);
    let bucket = this.storage[index];

    if (bucket == null) {
      return;
    }

    return bucket.find(item=>{
      return item[0] === key;
    })

  }


  // 删
  remove(key){
    let index = hashFn(key, this.MaxSize);
    let bucket = this.storage[index];

    if (bucket == null) {
      return;
    }

    let numOfRemove = bucket.findIndex(item=>{
      return item[0] === key;
    })

    if (numOfRemove === -1) {
      return;
    } else {
      bucket.splice(numOfRemove, 1);
      this.count--;
      return;
    }

  }
  
}


let ht = new hashTable(7);
ht.put('abc','123')
ht.put('cba','223')
ht.put('nba','323')
ht.put('mba','333')
ht.put('bac','1443')
ht.put('ccc','553')
ht.put('aaa','773')
// console.log(ht);

// ht.put('abc','999');
// console.log(ht);
// 
// ht.remove('abc');
// console.log(ht);