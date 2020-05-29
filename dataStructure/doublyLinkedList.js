// 10 --> 5 --> 6

class DoublyLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
      prev: null,
    };
    this.tail = this.head;
    this.length = 1;
  }
  append (value) {
    let newNode = {value, next: null, prev: null};
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }
  prepend(value) {
    const newNode = {
      value: value,
      next: null,
      prev: null
    }
    newNode.next = this.head;
    this.head.prev = newNode
    this.head = newNode;
    this.tail.next = null;
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

const list = new DoublyLinkedList(10);
list.append(5)
list.prepend(1);
console.log((list));
