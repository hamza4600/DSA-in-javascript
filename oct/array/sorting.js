// sorting in array 
// swaping the min and max value in array till the array is sorted

// have two loops  compare the first element with the second element if the first element is greater than the second element then swap the element
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
console.log(selectionSort([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(selectionSort([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]));
