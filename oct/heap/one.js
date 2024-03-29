// Heaps
// is a non-linear data structure that is used to implement priority queues.
// A heap is a specialized tree-based data structure that satisfies the heap property: if P is a parent node of C, then the key (the value) of P is either greater than or equal to (in a max heap) or less than or equal to (in a min heap) the key of C.

// implementation of a Heap using Array
// best for priority queue
class BinaryHeap {
  constructor() {
    let list = [];

    //Heapify
    this.maxHeapify = (arr, n, i) => {
      let largest = i;
      let l = 2 * i + 1; //left child index
      let r = 2 * i + 2; //right child index


      //If left child is smaller than root
      if (l < n && arr[l] > arr[largest]) {
        largest = l;
      }

      // If right child is smaller than smallest so far
      if (r < n && arr[r] > arr[largest]) {
        largest = r;
      }

      // If smallest is not root
      if (largest != i) {
        let temp = arr[i];
        arr[i] = arr[largest];
        arr[largest] = temp;

        // Recursively heapify the affected sub-tree
        this.maxHeapify(arr, n, largest);
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
          this.maxHeapify(list, list.length, i);
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
        this.maxHeapify(list, list.length, i);
      }
    };

    //Return max value
    this.findMax = () => list[0];

    //Remove max val
    this.deleteMax = () => {
      this.delete(list[0]);
    };

    //Remove and return max value
    this.extractMax = () => {
      const max = list[0];
      this.delete(max);
      return max;
    };

    //Size
    this.size = () => list.length;

    //IsEmpty
    this.isEmpty = () => list.length === 0;

    //Return head
    this.getList = () => list;
  }
}

const heapA = new BinaryHeap();
heapA.insert(10);
heapA.insert(5);
heapA.insert(13);
heapA.insert(2);
heapA.insert(7);
heapA.insert(11);

console.log(heapA.getList());
