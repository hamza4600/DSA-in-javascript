// 
function repete(arr) {
    let map = {};

    for (var i = 0; i < arr.length; i++) {
        if (map[arr[i]]) {
            map[arr[i]]++;
        } else {
            map[arr[i]] = 1;
        }
    }
    let max = 0;
    let maxChar = '';
    for (var key in map) {
        if (map[key] > max) {
            max = map[key];
            maxChar = key;
        }
    }
    return [maxChar, max];
}

// using whiel Loop
function repete2(arr) {
    let start = 0;
    let end = arr.length - 1;

    while (start < end) {
        let count = 0;
        if (arr[start] === arr[end]) {
            return arr[start];
        }
        start++;
        // end--;
    }
    return -1;
}

// in O(1) time and O(1) space
function repete3(arr) {
    let max = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i + 1]) {
            let count = 1;
            count++;
            if (count > max) {
                max = count;
            }
            // return [arr[i], max];
        }
    }
    return max;

}

// console.log(repete3('aabbbccccc'));

// kadien algo  is used to find the maximum sum of subarray
function kadane(arr) {
    let max = 0;
    let sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
        if (sum > max) {
            max = sum;
        }
        if (sum < 0) {
            sum = 0;
        }
    }
    return max;
}

console.log(kadane([-2, -3, 4, -1, -2, 1, 5, -3]));



var findInMountainArray = function (target, mountainArr) {
    const len = mountainArr.length();

    // Find the index of peak
    let peakIdx = 0;
    let l = 0;
    let r = len;
    while (l < r) {
        const m = ~~((l + r) / 2);
        if (mountainArr.get(m) < mountainArr.get(m + 1)) l = peakIdx = m + 1;
        else r = m;
    }

    // Find the target on the left side of peak
    l = 0;
    r = peakIdx - 1;
    while (l <= r) {
        const m = ~~((l + r) / 2);
        if (mountainArr.get(m) === target) return m;
        else if (mountainArr.get(m) < target) l = m + 1;
        else r = m - 1;
    }

    // Find the target on the right side of peak
    l = peakIdx;
    r = len - 1;
    while (l <= r) {
        const m = ~~((l + r) / 2);
        if (mountainArr.get(m) === target) return m;
        else if (mountainArr.get(m) > target) l = m + 1;
        else r = m - 1;
    }
    return -1;


};

console.log(findInMountainArray(3, [1, 2, 3, 4, 5, 3, 1]));