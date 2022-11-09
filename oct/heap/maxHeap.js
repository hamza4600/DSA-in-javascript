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
    let list = [];
    //Heapify
    this.minHeapify = (arr, n, i) => {
      let smallest = i;
      let l = 2 * i + 1; //left child index
      let r = 2 * i + 2; //right child index
      //If left child is smaller than root
      if (l < n && arr[l] < arr[smallest]) {
        smallest = l;
      }

      // If right child is smaller than smallest so far
      if (r < n && arr[r] < arr[smallest]) {
        smallest = r;
      }
      // If smallest is not root
      if (smallest != i) {
        let temp = arr[i];
        arr[i] = arr[smallest];
        arr[smallest] = temp;

        // Recursively heapify the affected sub-tree
        this.minHeapify(arr, n, smallest);
      }
    };

    //Insert Value
    this.insert = (num) => {
      const size = list.length;
      if (size === 0) {
        list.push(num);
      } else {
        list.push(num);
        //Heapify
        for (let i = parseInt(list.length / 2 - 1); i >= 0; i--) {
          this.minHeapify(list, list.length, i);
        }
      }
    };
    //Remove value
    this.delete = (num) => {
      const size = list.length;
      let i;
      for (i = 0; i < size; i++) {
        if (list[i] === num) {
          break;
        }
      }
      [list[i], list[size - 1]] = [list[size - 1], list[i]];
      //Remove the last element
      list.splice(size - 1);
      //Heapify the list again
      for (let i = parseInt(list.length / 2 - 1); i >= 0; i--) {
        this.minHeapify(list, list.length, i);
      }
    };
    this.maxItem = () => list[0];
    this.minItem = () => list[list.length - 1];
    this.deleteMin = () => {
      this.delete(list[0]);
    };
    this.extractMin = () => {
      const min = list[0];
      this.delete(min);
      return min;
    };
    this.size = () => list.length;
    this.isEmpty = () => list.length === 0;
    this.getList = () => list;
  }
}

let maxHeap = new MaxHeap();
maxHeap.insert(10);
maxHeap.insert(20);
maxHeap.insert(30);
maxHeap.insert(40);
maxHeap.insert(50);

console.log("Max Item", maxHeap.maxItem());
console.log("Min Item", maxHeap.minItem());
