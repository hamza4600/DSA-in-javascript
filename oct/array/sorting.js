// sorting in array 
// swaping the min and max value in array till the array is sorted

// have two loops  compare the first element with the second element if the first element is greater than the second element then swap the element
// best case O(n) worst case O(n^2)
function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] < arr[j]) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}

// test
console.log("Slection Sort ")
console.log(selectionSort([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(selectionSort([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]));


// bubbol sort 
// repeatedely swap two adjcent items if they are in wrong order
// inefficent algo and run up to i times
// best case O(n) and worst case O(n^2)

// can also be writtens as
let bubbleSort = (inputArr) => {
    let len = inputArr.length;
    let elementSwipe = false;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            if (inputArr[j] > inputArr[j + 1]) {
                let tmp = inputArr[j];
                inputArr[j] = inputArr[j + 1];
                inputArr[j + 1] = tmp;
                elementSwipe = true;
            }
        }
        if (elementSwipe === false) {
            break;
        }
    }
    return inputArr;
};

// test
console.log(bubbleSort([1, 2, 30, 4, 50, 600, 700, 8, 9, 10]));

// insertion sort
// insert the element at the correct position in the sorted array
// best for small array
// best case O(n) and worst case O(n^2)

function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let currentVal = arr[i]; // current value
        for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
            arr[j + 1] = arr[j]; // swap
        }
        arr[j + 1] = currentVal; // insert
    }
    return arr;
}

// same inplementaion  in while loop 
function InsertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let currentVal = arr[i]; // current value
        let j = i - 1; // previous value
        while (j >= 0 && arr[j] > currentVal) {
            arr[j + 1] = arr[j]; // swap
            j--; // decrement
        }
        arr[j + 1] = currentVal; // insert
    }
    return arr;
}

// tets
console.log("Sorting an aray using insertion sort");
console.log(insertionSort([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]));
console.log(InsertionSort([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]));


function sumZero(arr) {
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
        let sum = arr[left] + arr[right];
        if (sum === 0) {
            return [arr[left], arr[right]];
        } else if (sum > 0) {
            right--;
        } else {
            left++;
        }
    }
}