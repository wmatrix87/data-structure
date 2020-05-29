class HashTable {
  constructor(size) {
    this.data = new Array(size)
  }
  _hash (key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) + i) % this.data.length;
    }
    return hash;
  }
  set (key, value) {
    const hash = this._hash(key);
    if (this.data[hash]) {
      this.data[hash].push([key, value]);
    } else {
      this.data[hash] = [];
      this.data[hash].push([key, value]);
    }
    return this.data;
  }
  get (key) {
    const hash = this._hash(key);
    const allDataByHash = this.data[hash];
    
    for (const row of allDataByHash) {
      if (row[0] === key) {
        return row[1];
      }
    }
    return null;
  }
}

const hashTable = new HashTable(10);

// console.log(hashTable._hash('test'));
hashTable.set('test1', '1');
hashTable.set('test2', '2');
hashTable.set('test3', '3');
console.log(hashTable.get('test2'));
