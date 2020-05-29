// 10 --> 5 --> 6

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }
  append (value) {
    const newNode = {value, next: null};
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }
  prepend(value) {
    const newNode = {value, next: null};
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }
  // 10 --> 5 --> 6 --> 7
  insert (index, value) {
    if(index >= this.length) {
      return this.append(value);
    }
    const newNode = {
      value: value,
      next: null
    };
    const leader = this.traverseToIndex(index-1);
    const holdingPointer = leader.next;
    leader.next = newNode;
    newNode.next = holdingPointer;
    this.length++;
    return this;
  }
  delete(index) {
    if(index >= this.length) {
      return false;
    }

    const leader = this.traverseToIndex(index-1);
    const holdingPointer = leader.next;
    leader.next = holdingPointer.next;
    this.length--;
    return this;
  }
  traverseToIndex (index) {
    let count = 0;
    let currentNode = this.head;
    while (index !== count) {
      currentNode = currentNode.next;
      count++;
    }
    return currentNode;
  }
}

const list = new LinkedList(10);

console.log(JSON.stringify(list.append(5).append(7).prepend(1).insert(2, 6).delete(2)));
