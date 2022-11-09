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

// 1. insert
class MinBinaryHeap {
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

      //Get the index of the number to be removed
      let i;
      for (i = 0; i < size; i++) {
        if (list[i] === num) {
          break;
        }
      }

      //Swap the number with last element
      [list[i], list[size - 1]] = [list[size - 1], list[i]];

      //Remove the last element
      list.splice(size - 1);

      //Heapify the list again
      for (let i = parseInt(list.length / 2 - 1); i >= 0; i--) {
        this.minHeapify(list, list.length, i);
      }
    };

    //Return min value
    this.findMin = () => list[0];

    //Return max value
    this.findMax = () => list[list.length - 1];

    //Remove min val
    this.deleteMin = () => {
      this.delete(list[0]);
    };

    //Remove and return min value
    this.extractMin = () => {
      const min = list[0];
      this.delete(min);
      return min;
    };

    //Size
    this.size = () => list.length;

    //IsEmpty
    this.isEmpty = () => list.length === 0;

    //Return head
    this.getList = () => list;
  }
}

const minHeap = new MinBinaryHeap();

minHeap.insert(10);
minHeap.insert(20);
minHeap.insert(30);
minHeap.insert(40);
minHeap.insert(50);
minHeap.insert(60);
minHeap.insert(70);
minHeap.insert(80);
minHeap.insert(90);
console.log(minHeap);
console.log("min Item", minHeap.findMin());
console.log("min Item", minHeap.findMax());
