// Heaps
// is a non-linear data structure that is used to implement priority queues.
// A heap is a specialized tree-based data structure that satisfies the heap property: if P is a parent node of C, then the key (the value) of P is either greater than or equal to (in a max heap) or less than or equal to (in a min heap) the key of C.
//
// implementation of a Heap
class Heap {
  constructor() {
    this.heap = [];
  }
  // add
  add(item) {
    this.heap.push(item);
    this.bubbleUp();
  }
  // remove
  remove() {
    const max = this.heap[0];
    const end = this.heap.pop();
    if (this.heap.length > 0) {
      this.heap[0] = end;
      this.sinkDown();
    }
    return max;
  }
  // bubbleUp
  bubbleUp() {
    let index = this.heap.length - 1;
    while (index > 0) {
      let element = this.heap[index];
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.heap[parentIndex];
      if (element <= parent) break;
      this.heap[parentIndex] = element;
      this.heap[index] = parent;
      index = parentIndex;
    }
  }
  // sinkDown
  sinkDown() {
    let index = 0;
    const length = this.heap.length;
    const element = this.heap[0];
    while (true) {
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;
      let leftChild, rightChild;
      let swap = null;
      if (leftChildIndex < length) {
        leftChild = this.heap[leftChildIndex];
        if (leftChild > element) {
          swap = leftChildIndex;
        }
      }
      if (rightChildIndex < length) {
        rightChild = this.heap[rightChildIndex];
        if (
          (swap === null && rightChild > element) ||
          (swap !== null && rightChild > leftChild)
        ) {
          swap = rightChildIndex;
        }
      }
      if (swap === null) break;
      this.heap[index] = this.heap[swap];
      this.heap[swap] = element;
      index = swap;
    }
  }

  // size
  size() {
    return this.heap.length;
  }
}

const heap = new Heap();
heap.add(1);
heap.add(2);
heap.add(3);
heap.add(4);
heap.add(5);
console.log(heap);
// console.log(heap.remove());

// 1. Min Heap
// elements are all smaller than their children so root node will be smallest element in the heap.
// as we go down element get bigger and bigger.
// insertion in min Heap
// 1. insert the new element at top of the heap.
// 2. compare the new element with its parent.
// 3. if the new element is smaller than its parent, then swap them.
// 4. repeat step 2 and 3 until the new element is not smaller than its parent.
// 5. if the new element is greater than its parent, then stop.

// when we add new item they are always added at a particular position.
// basically we are adding new item at the end of the array.

// implementation of min heap
// 1. insert
// 2. extractMin
// 3. remove
// 4. heapify
// 5. buildHeap
// 6. heapSort

// min heap
class MinHeap {
  constructor() {
    this.heap = [];
  }
  // getLeftChildIndex
  getLeftChildIndex(parentIndex) {
    return 2 * parentIndex + 1;
  }
  // getRightChildIndex
  getRightChildIndex(parentIndex) {
    return 2 * parentIndex + 2;
  }
  // getParentIndex
  getParentIndex(childIndex) {
    return Math.floor((childIndex - 1) / 2);
  }
  // hasLeftChild
  hasLeftChild(index) {
    return this.getLeftChildIndex(index) < this.heap.length;
  }
  // hasRightChild
  hasRightChild(index) {
    return this.getRightChildIndex(index) < this.heap.length;
  }
  // hasParent
  hasParent(index) {
    return this.getParentIndex(index) >= 0;
  }
  // leftChild
  leftChild(index) {
    return this.heap[this.getLeftChildIndex(index)];
  }
  // rightChild
  rightChild(index) {
    return this.heap[this.getRightChildIndex(index)];
  }
  // parent
  parent(index) {
    return this.heap[this.getParentIndex(index)];
  }
  // swap
  swap(indexOne, indexTwo) {
    const temp = this.heap[indexOne];
    this.heap[indexOne] = this.heap[indexTwo];
    this.heap[indexTwo] = temp;
  }
  // peek
  peek() {
    if (this.heap.length === 0) return null;
    return this.heap[0];
  }
  // poll
  poll() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop();
    const item = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown();
    return item;
  }
  // add
  add(item) {
    this.heap.push(item);
    this.heapifyUp();
    return this;
  }
  // heapifyUp
  heapifyUp() {
    let index = this.heap.length - 1;
    while (this.hasParent(index) && this.parent(index) > this.heap[index]) {
      this.swap(this.getParentIndex(index), index);
      index = this.getParentIndex(index);
    }
  }
  // heapifyDown
  heapifyDown() {
    let index = 0;
    while (this.hasLeftChild(index)) {
      let smallerChildIndex = this.getLeftChildIndex(index);
      if (
        this.hasRightChild(index) &&
        this.rightChild(index) < this.leftChild(index)
      ) {
        smallerChildIndex = this.getRightChildIndex(index);
      }
      if (this.heap[index] < this.heap[smallerChildIndex]) break;
      this.swap(index, smallerChildIndex);
      index = smallerChildIndex;
    }
  }
  // insert
  insert(item) {
    this.heap.push(item);
    if (this.heap.length > 1) {
      let current = this.heap.length - 1;
      while (
        current > 0 ||
        this.heap[current] < this.heap[Math.floor((current - 1) / 2)]
      ) {
        let parent = Math.floor((current - 1) / 2);
        let temp = this.heap[current];
        this.heap[current] = this.heap[parent];
        this.heap[parent] = temp;
        current = parent;
      }
    }
  }
  // remove
  remove(item) {
    let length = this.heap.length;
    for (let i = 0; i < length; i++) {
      if (this.heap[i] === item) {
        if (i === length - 1) this.heap.pop();
        else {
          this.heap[i] = this.heap.pop();
          while (
            i > 0 &&
            this.heap[i] < this.heap[Math.floor((i - 1) / 2)]
          ) {
            let parent = Math.floor((i - 1) / 2);
            let temp = this.heap[i];
            this.heap[i] = this.heap[parent];
            this.heap[parent] = temp;
            i = parent;
          }
          this.heapifyDown(i);
        }
        return true;
      }
    }
    return false;
  }

  // size
  size() {
    return this.heap.length;
  }
}

// 2. Max Heap
// elements are all bigger than their children so root node will be biggest element in the heap.
// as we go down element get smaller and smaller.
// insertion in max Heap
// 1. insert the new element at top of the heap.
// 2. compare the new element with its parent.
// 3. if the new element is bigger than its parent, then swap them.
// 4. repeat step 2 and 3 until the new element is not bigger than its parent.
// 5. if the new element is smaller than its parent, then stop.

// implementation of max heap
// 1. insert
// 2. extractMax
// 3. remove
// 4. heapify
// 5. buildHeap
// 6. heapSort

// max heap
class MaxHeap {
    constructor() {
        this.heap = [];
    }
    // getLeftChildIndex
    getLeftChildIndex(parentIndex) {
        return 2 * parentIndex + 1;
    }
    // getRightChildIndex
    getRightChildIndex(parentIndex) {
        return 2 * parentIndex + 2;
    }
    // getParentIndex
    getParentIndex(childIndex) {
        return Math.floor((childIndex - 1) / 2);
    }
    // hasLeftChild
    hasLeftChild(index) {
        return this.getLeftChildIndex(index) < this.heap.length;
    }
    // hasRightChild
    hasRightChild(index) {
        return this.getRightChildIndex(index) < this.heap.length;
    }
    // hasParent
    hasParent(index) {
        return this.getParentIndex(index) >= 0;
    }
    // leftChild
    leftChild(index) {
        return this.heap[this.getLeftChildIndex(index)];
    }
    // rightChild
    rightChild(index) {
        return this.heap[this.getRightChildIndex(index)];
    }
    // parent
    parent(index) {
        return this.heap[this.getParentIndex(index)];
    }
    // swap
    swap(indexOne, indexTwo) {
        const temp = this.heap[indexOne];
        this.heap[indexOne] = this.heap[indexTwo];
        this.heap[indexTwo] = temp;
    }
    // peek
    peek() {
        if (this.heap.length === 0) return null;
        return this.heap[0];
    }
    // poll
    poll() {
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) return this.heap.pop();
        const item = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown();
        return item;
    }
    // add
    add(item) {
        this.heap.push(item);
        this.heapifyUp();
        return this;
    }
    // heapifyUp
    heapifyUp() {
        let index = this.heap.length - 1;
        while (this.hasParent(index) && this.parent(index) < this.heap[index]) {
        this.swap(this.getParentIndex(index), index);
        index = this.getParentIndex(index);
        }
    }
    // heapifyDown
    heapifyDown() {
        let index = 0;
        while (this.hasLeftChild(index)) {
        let biggerChildIndex = this.getLeftChildIndex(index);
        if (
            this.hasRightChild(index) &&
            this.rightChild(index) > this.leftChild(index)
        ) {
            biggerChildIndex = this.getRightChildIndex(index);
        }
        if (this.heap[index] > this.heap[biggerChildIndex]) break;
        this.swap(index, biggerChildIndex);
        index = biggerChildIndex;
        }
    }
    // remove
    remove(item) {
        const length = this.heap.length;
        for (let i = 0; i < length; i++) {
        if (this.heap[i] !== item) continue;
        if (i === length - 1) this.heap.pop();
        else {
            this.heap[i] = this.heap.pop();
            const parent = this.parent(i);
            if (
            this.hasLeftChild(i) &&
            (!parent || parent < this.heap[i])
            ) {
            this.heapifyDown(i);
            } else {
            this.heapifyUp(i);
            }
        }
        return true;
        }
        return false;
    }
    // size
    size() {
        return this.heap.length;
    }
}
