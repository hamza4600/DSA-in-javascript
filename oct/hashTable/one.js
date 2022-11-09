// Hash Table
// 1. Hash Table is a data structure that stores key-value pairs.
// associating a value with a particular key for highly efficient lookup.
// mostaly used in Database indexing.

// array is used to store data
// Collision is a problem that occurs when two keys map to the same index in an array.
// Collions can be solved by using separate chaining or open addressing , Double Hashing, Linear Probing, Quadratic Probing, Rehashing, Chaining, Robin Hood Hashing, etc.

// Hash Table is a data structure that stores key-value pairs.

class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }
  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31; // used to reduce the number of collisions
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }
  set(key, value) {
    let index = this._hash(key);
    if (!this.keyMap[index]) { // if there is no value at that index
      this.keyMap[index] = [];
    }
    this.keyMap[index].push([key, value]);
  }
  get(key) {
    let index = this._hash(key);
    if (this.keyMap[index]) {
      for (let i = 0; i < this.keyMap[index].length; i++) {
        if (this.keyMap[index][i][0] === key) {
          return this.keyMap[index][i][1];
        }
      }
    }
    return undefined;
  }
  keys() {
    let keysArr = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!keysArr.includes(this.keyMap[i][j][0])) {
            keysArr.push(this.keyMap[i][j][0]);
          }
        }
      }
    }
    return keysArr;
  }
  values() {
    let valuesArr = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!valuesArr.includes(this.keyMap[i][j][1])) {
            valuesArr.push(this.keyMap[i][j][1]);
          }
        }
      }
    } 
    return valuesArr;
  }
  // seraching
  search(key) {
    let index = this._hash(key);
    if (this.keyMap[index]) {
      for (let i = 0; i < this.keyMap[index].length; i++) {
        if (this.keyMap[index][i][0] === key) {
          return this.keyMap[index][i];
        }
      }
    }
    return undefined;
  }
}

let ht = new HashTable(17);
ht.set("maroon", "#800000");
ht.set("yellow", "#FFFF00");
ht.set("olivfve", "#808000");
ht.set("tcee", "#808000");
ht.set("olivaz2e", "#808400");
ht.set("olivxse", "#808200");
ht.set("olsasive", "#808700");
ht.set("olivvve", "#808100");
ht.set("olivdcde", "#808018");
ht.set("olivdcde", "#808090");
console.log("HashTable by using array");
console.log(ht.get("maroon"));
console.log(ht.get("yellow"));
console.log(ht.get("olive"));

console.log(ht.keys());
console.log(ht.values());
console.log("Type is",typeof(ht));

// it is implementated by using Object
class HashTable2 {
  constructor() {
    this.values = {};
    this.length = 0;
    this.size = 0;
  }

  calculateHash(key) {
    return key.toString().length % this.size;
  }

  add(key, value) {
    const hash = this.calculateHash(key);
    if (!this.values.hasOwnProperty(hash)) { // hasOwnProperty means if hash is not present
      this.values[hash] = {};
    }
    if (!this.values[hash].hasOwnProperty(key)) {
      this.length++;
    }
    this.values[hash][key] = value;
  }

  search(key) {
    const hash = this.calculateHash(key);
    if (
      this.values.hasOwnProperty(hash) &&
      this.values[hash].hasOwnProperty(key)
    ) {
      return this.values[hash][key];
    } else {
      return null;
    }
  }
  
}
 
const myHashTable = new HashTable2();
myHashTable.add("firstName", "John");
myHashTable.add("1", "John ne hjdcbduc edfvuj");
myHashTable.add("lastName", "Doe");
myHashTable.add("age", 25);
myHashTable.add("job", "developer");
myHashTable.add("city", "London");
myHashTable.add("country", "England");
console.log(myHashTable.search("firstName"));
console.log(myHashTable.search("lastName"));
console.log(myHashTable.search("age"));
console.log(myHashTable.search("1"));


