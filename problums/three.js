// find second smallest number in array
function secondSmallest(arr) {
    let first = Infinity;
    let second = Infinity;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] < first) {
            second = first;
            first = arr[i];
        } else if(arr[i] < second) {
            second = arr[i];
        }
    }
    return second;
}

console.log(secondSmallest([1, 2, 3, -4, -5, 6, 7, 8, 9, 10]));


// second largest number in array
function seconslargest(nums) {
    let first = -Infinity;
    let second = -Infinity;
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] > first) {
            second = first;
            first = nums[i];
        } else if(nums[i] > second) {
            second = nums[i];
        }
    }
    return second;
}
console.log(seconslargest([2 ,3 ,6 ,6 ,5]));

// above approach is wrong for this case [2 ,3 ,6 ,6 ,5]
// correct approach is
function secondLargestT(nums) {
    let first = -Infinity;
    let second = -Infinity;
    for(let i = 0; i <= nums.length; i++) {
        if(nums[i] > first) {
            second = first;
            first = nums[i];
        } else if(nums[i] > second && nums[i] < first) {
            second = nums[i];
        }
    }
    return second;
}
console.log(secondLargestT([2 ,3 ,6 ,6 ,5]));
