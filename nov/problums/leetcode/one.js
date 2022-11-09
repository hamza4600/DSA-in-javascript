// Binar serach 
function serach(nums, target) {
    let start = 0;
    let end = nums.length - 1;

    if (nums.length === 1) return nums[0] === target ? 0 : -1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (nums[mid] === target) return mid;
        if (nums[mid] > target) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
    return -1;
}
console.log(serach([2, 5], 5))

function isBadVersion(n) {
    let start = 1,
        end = n;
    while (start < end) {
        let mid = Math.floor((start + end) / 2);
        if (isBadVersion(mid)) {
            end = mid;
        }
        else {
            start = mid + 1;
        }
    }
    return start;
}

function s(nums, target) {
    if (nums.length === 1) return target === nums[0] ? [0, 0] : [-1, -1];

    let arr = [];
    let start = 0,
        end = nums.length - 1
    while (start <= end) {
        let mid = (start + end) >> 1;
        if (target === nums[mid] && target === nums[mid - 1]) {
            arr.push(mid - 1, mid)
        } else if (target === nums[mid - 1] && target === nums[mid]) {
            arr.push(mid - 1, mid)
        }
        if (target > nums[mid]) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    if (arr.length === 0) {
        arr.push(-1, -1)
    }
    return arr
}

function rS(N, T) {
    const find = (target, arr, left = 0, right = arr.length) => {
        while (left <= right) {
            let mid = left + right >> 1
            if (arr[mid] < target) left = mid + 1
            else right = mid - 1
        }
        return left
    }
    let Tleft = find(T, N)
    if (N[Tleft] !== T) return [-1, -1]
    return [Tleft, find(T + 1, N, Tleft) - 1]
}


console.log(s([2, 2], 2))

var mergeTwoLists = function (list1, list2) {
    if (!list1) return list2;
    if (!list2) return list1;

    if (list1.val <= list2.val) {
        list1.next = mergeTwoLists(list1.next, list2);
        return list1;
    } else {
        list2.next = mergeTwoLists(list1, list2.next);
        return list2;
    }
};


// 2D array
// hoursglass Sum

function hourglassSum(arr) {
    let max = -Infinity;
    for (let i = 0; i < arr.length - 2; i++) {
        for (let j = 0; j < arr[i].length - 2; j++) {
            let sum = arr[i][j] + arr[i][j + 1] + arr[i][j + 2] + arr[i + 1][j + 1] + arr[i + 2][j] + arr[i + 2][j + 1] + arr[i + 2][j + 2];
            max = Math.max(max, sum);
        }
    }
    return max;
}

// left rotation
function rotLeft(a, d) {
    for (let i = 0; i < d; i++) {
        let first = a.shift(); // remove first element  and return it
        a.push(first);
    }
    return a;
}

// new year chaos
function minimumBribes(q) {
    let count = 0;
    for (let i = q.length - 1; i >= 0; i--) {
        if (q[i] - (i + 1) > 2) {
            console.log("Too chaotic");
            return;
        }
        for (let j = Math.max(0, q[i] - 2); j < i; j++) {
            if (q[j] > q[i]) count++;
        }
    }
    console.log(count);
}

// minimum swap
function minimumSwaps(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        while (arr[i] !== i + 1) {
            let temp = arr[i];
            arr[i] = arr[temp - 1];
            arr[temp - 1] = temp;
            count++;
        }
    }
    return count;
}

// array manipulation
function arrayManipulation(n, queries) {
    let arr = new Array(n).fill(0);
    for (let i = 0; i < queries.length; i++) {
        let [start, end, value] = queries[i];
        arr[start - 1] += value;
        if (end < n) arr[end] -= value;
    }
    let max = 0;
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        max = Math.max(max, sum);
    }
    return max;
}


// coding challenge
// nearly similar Rectangles

function nearlySimilarRectangles(sides) {
    let count = 0;
    for (let i = 0; i < sides.length; i++) {
        for (let j = i + 1; j < sides.length; j++) {
            if (sides[i][0] / sides[i][1] === sides[j][0] / sides[j][1]) {
                count++;
            }
        }
    }
    return count;
}

// optimize code 

function nearlySimilarRectangles(sides) {
    let count = 0;
    let map = new Map();
    for (let i = 0; i < sides.length; i++) {
        let key = sides[i][0] / sides[i][1];
        if (map.has(key)) {
            count += map.get(key);
            map.set(key, map.get(key) + 1);
        } else {
            map.set(key, 1);
        }
    }
    return count;
}

// coding challenge
// unexpected demand

function filledOrders(order, k) {
    let count = 0;
    order.sort((a, b) => a - b);
    for (let i = 0; i < order.length; i++) {
        if (k >= order[i]) {
            count++;
            k -= order[i];
        }
    }
    return count;
}

// Sorting Alogo 
function forSum(nums, target) {
    const sortedNums = nums.sort((a, b) => a - b);
    let resultArr = [];
    for (i = 0; i < sortedNums.length - 3; i++) {
        if (i > 0 && sortedNums[i] === sortedNums[i - 1]) {
            continue;
        }
        for (j = i + 1; j < sortedNums.length - 2; j++) {
            if (j > i + 1 && sortedNums[j] === sortedNums[j - 1]) {
                continue;
            }
            let left = j + 1;
            let right = sortedNums.length - 1;
            while (left < right) {
                const sum =
                    sortedNums[i] + sortedNums[j] + sortedNums[left] + sortedNums[right];
                if (sum < target) {
                    left++;
                } else if (sum > target) {
                    right--;
                } else {
                    resultArr.push([
                        sortedNums[i],
                        sortedNums[j],
                        sortedNums[left],
                        sortedNums[right]
                    ]);
                    while (left < right && sortedNums[left] === sortedNums[left + 1]) {
                        left++;
                    }
                    while (left < right && sortedNums[right] === sortedNums[right - 1]) {
                        right--;
                    }
                    left++;
                    right--;
                }
            }
        }
    }
    return resultArr;
}
console.log('+++==+', forSum([1, 0, -1, 0, -2, 2], 0));


function nS(s) {
    let arr = s.trim().split(' ');
    let last = arr.length - 1;
    return arr[last].length
}
console.log(nS('HAMZ KHANZA  '))

function Vov(word) {
    var isVowel = function (c) {
        return (c === 'a' || c === 'e' || c === 'i' || c === 'o' || c === 'u');
    }

    let vowelMap = new Map();
    let total = 0;
    let totalLen = word.length - 1;
    for (let i = 0; i <= totalLen; i++) {
        vowelMap.clear();
        for (let j = i; j <= totalLen && isVowel(word[j]); j++) {
            vowelMap.set(word[j], (vowelMap.get(word[j]) ?? 0) + 1);
            if (vowelMap.size == 5)
                total++;
        }
    }
    return total;
}
console.log(Vov("unicornarihan"))