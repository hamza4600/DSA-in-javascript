
// repeted Items in array

function repe(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i + 1]) {
            return arr[i];
        }
    }
    return false;
}

function repet(arr) {
    let map = {};
    for (var i = 0; i < arr.length; i++) {
        if (map[arr[i]]) {
            return arr[i];
        } else {
            map[arr[i]] = true;
        }
    }
    return false;
}

function repet3(arr) {
    let start = 0;
    let end = arr.length - 1;
    while (start < end) {
        if (arr[start] === arr[start + 1]) {
            return arr[start];
        }
        if (arr[end] === arr[end - 1]) {
            return arr[end];
        }
        start++;
        end--;
    }
    return false;
}

// console.log(repet3([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 12, 13, 14, 15, 16, 17, 18, 19, 20]));


var reverseString = function (s) {

    // recursive solution
    if (s.length === 1) {
        return s;
    }
    return s[s.length - 1] + reverseString(s.slice(0, s.length - 1));
}

// console.log(reverseString("hamza"));

function check(s) {
    let stack = [];
    let map = {
        "(": ")",
        "[": "]",
        "{": "}"
    };
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(" || s[i] === "[" || s[i] === "{") {
            stack.push(s[i]);
        } else {
            let last = stack.pop();
            if (s[i] !== map[last]) {
                return false;
            }
        }
    }
    if (stack.length !== 0) {
        return false;
    }
    return true;
}

function sqr(x) {
    var left = 1;
    var right = Math.floor(x / 2) + 1;
    var mid;

    while (left <= right) {
        mid = Math.floor((left + right) / 2);
        if (mid * mid === x) {
            return mid;
        }
        if (mid * mid > x) {
            right = mid - 1;
        } else if (mid * mid < x) {
            left = mid + 1;
        }
    }
    return right;
}
console.log(sqr(8));

//
function comb(n) {
    if (n <= 0) return 0
    if (n === 1) return 1
    if (n === 2) return 2

    let oneStep = 2;
    let twoStep = 1;
    let allStep = 0;

    for (var i = 2; i < n; i++) {
        allStep = oneStep + twoStep;
        twoStep = oneStep;
        oneStep = allStep;
    }
    return allStep;

}

console.log(comb(5));

var merge = function (nums1, m, nums2, n) {
    let i = m - 1;
    let j = n - 1;
    let k = m + n - 1;
    while (i >= 0 && j >= 0) {
        if (nums1[i] > nums2[j]) {
            nums1[k] = nums1[i];
            i--;
        } else {
            nums1[k] = nums2[j];
            j--;
        }
        k--;
    }
    while (j >= 0) {
        nums1[k] = nums2[j];
        j--;
        k--;
    }
    return nums1;

};

let arr1 = [1, 2, 3, 4, 5]
let arr2 = [1, 2, 3, 4, 5]
console.log(merge(arr1, 5, arr2, 5))

// func
function deuplication(head) {
    let current = head;
    while (current !== null) {
        if (current.next !== null && current.val === current.next.val) {
            current.next = current.next.next;
        } else {
            current = current.next;
        }
    }
    return head;
}



function spiral(matr) {
    let result = [];
    let startRow = 0;
    let endRow = matr.length - 1;
    let startCol = 0;
    let endCol = matr[0].length - 1;

    while (startRow <= endRow && startCol <= endCol) {
        for (var i = startCol; i <= endCol; i++) {
            result.push(matr[startRow][i]);
        }
        startRow++;
        for (var i = startRow; i <= endRow; i++) {
            result.push(matr[i][endCol]);
        }
        endCol--;
        for (var i = endCol; i >= startCol; i--) {
            result.push(matr[endRow][i]);
        }
        endRow--;
        for (var i = endRow; i >= startRow; i--) {
            result.push(matr[i][startCol]);
        }
        startCol++;
    }
    return result;
}
console.log(spiral([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));

function pali(s) {
    const set = new Set();
    let count = 0;

    for (const char of s) {
        if (set.has(char)) {
            count += 2;
            set.delete(char);
        }
        else {
            set.add(char);
        }
    }

    return count + (set.size > 0 ? 1 : 0);
}

// console.log("Pali",pali("abccccdd"));

function cycle(head) {
    let slow = head;
    let fast = head;

    while (fast && fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast) {
            slow = head;
            while (slow !== fast) {
                slow = slow.next;
                fast = fast.next;
            }
            return slow;
        }
    }
    return null;
}
