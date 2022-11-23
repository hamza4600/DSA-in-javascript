// seraching and  sorting alogos

// linear search
function linearSearch(arr, val) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === val) {
            return i;
        }
    }
    return -1;
}

// Binary search is only for sorted array
function binarySearch(arr, val) {
    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
        let middle = Math.floor((start + end) >> 1); // << 1 is faster than / 2
        if (val === arr[middle]) {
            return middle;
        }
        if (val > arr[middle]) {
            start = middle + 1;
        }
        if (val < arr[middle]) {
            end = middle - 1;
        }
    }
    return -1;
}
// console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 9)); // time complexity is O(log n)
// console.log(linearSearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 9)); // time complexity is O(n)


// Bubble sort
function bubbleSort(arr) {
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr.length; j++) {
            if (arr[j] < arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp
            }
        }
    }
    return arr
}

console.log(bubbleSort([10, 2, 3, 400, 5, 6, 7, 8, 9])); // time complexity is O(n^2)

// Selection scane and insert item at its right position 
function selectionSort(arr) {
    let lenth = arr.length
    let min;
    for (var i = 0; i < lenth; i++) {
        min = i
        for (var j = i + 1; j < lenth; j++) {
            if (arr[j] < arr[min]) {
                min = j
            }
        }
        if (i != min) { // if min is not equal to i then swap the item
            let temp = arr[i];
            arr[i] = arr[min];
            arr[min] = temp
        }
    }
    return arr
}

// console.log(selectionSort([10, 2, 3, 400, 5, 6, 7, 8, 9])); // time complexity is O(n^2)

// insertion sort 
function insertionSort(arr) {
    for (var i = 0; i < arr.length; i++) {
        let current = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = current;
    }
    return arr;
}

console.log(insertionSort([10, 2, 3, 400, 5, 6, 7, 8, 9])); // time complexity is O(n^2)

// Quick Sort 
// pivot is the last item in the array and we will compare all the items with pivot and put them in right position done  recursively

function quickQort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    let pivot = arr[arr.length - 1]; // pivot is the last item in the array
    let left = [];
    let right = [];
    for (var i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) { // if item is less than pivot then put it in left array
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }
    return [...quickQort(left), pivot, ...quickQort(right)]
}
console.log("Quick Sort ")
console.log(quickQort([10, 2, 3, 400, 5, 6, 7, 8, 9])); // time complexity is O(n log n)

// Merge Sort
// divide and conquer and merge the sorted array
function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
    return merge(left, right);
}

function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }
    return [...result, ...left.slice(leftIndex), ...right.slice(rightIndex)]
}

// console.log("Merge Sort ")
// console.log(mergeSort([10, 2, 3, 400, 5, 6, 7, 8, 9])); // time complexity is O(n log n)

// Radix Sort
// is mostaly used for sorting big numbers  group indivisual digits and sort them in DC3 algorithm

// Counting Sort
// sort the array by the number of digits  and then sort the array by the digits
function countSort(arr) {
    let max = Math.max(...arr);
    let min = Math.min(...arr);
    let count = new Array(max - min + 1).fill(0);
    for (var i = 0; i < arr.length; i++) {
        count[arr[i] - min]++;
    }
    let result = [];
    for (var i = 0; i < count.length; i++) {
        while (count[i] > 0) {
            result.push(i + min);
            count[i]--;
        }
    }
    return result;
}

console.log("Counting Sort ")
console.log(countSort([10, 2, 3, 400, 5, 6, 7, 8, 9])); // time complexity is O(n + k)

// Bucket Sort
// sort items in the bucket and then sort the bucket 


// Heap Sort
// sort the array by heapify and then sort the array by heapify used in priority queue and graph algorithms

// Shell Sort
// sort the array by gap and then sort the array by gap works like insertion sort but faster
 

// Cube Sort
// parallel sorting algorithm builds self balance  multidimensional array and then sort the array

// Cycle Sort
// is a in-place sorting algo and comparision , find minimum nu of memory writes to sort the array

// Flash Sort
// distributed sorting alogo  basic idea is to where to put the item in the array when range is known

// Gnome Sort or Stupid Sort
// works like insertion sort but faster and less memory used basic idea is to find the right position of the item and then swap it

// Library Sort
// used insertion sort but with gaps in array and then sort the array by gaps inserton 

// Odd Even Sort or Brick Sort
// is a parallel sorting algorithm and works like bubble sort but faster compare two and swap them if they are not in order

// Pigeonhole Sort
//  is a sorting algorithm that is suitable for sorting lists of elements where the number of elements (n) and the length of the range of possible key values (N) are approximately the same

// Strand Sort
// is recusive algo sort items in incresing order and then sort the array by the items

// Tag Sort
// we only swap the tage of array insted of swapping the lagrge arr of obj
// sort an interger array after tagging it with original Obejct

// Tim Sort
// is a hybrid sorting algorithm, derived from merge sort and insertion sort, designed to perform well on many kinds of real-world data




//using nild in js sort the array by the number of digits
// console.log([10, 2, 3, 400, 5, 6, 7, 8, 9].sort((a, b) => a - b)); // time complexity is O(n log n)

 