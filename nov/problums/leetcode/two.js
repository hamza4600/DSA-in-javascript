// 
function fib(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;
    return fib(n - 1) + fib(n - 2);
}

function splitinfibo(S) {
    // split array into finbonacci sequence
    const bit32 = 2 ** 31 - 1;

    for (let i = 1; i < S.length; i++) {
        const num1 = S.slice(0, i)
        if (+num1 > bit32) break

        for (let j = i + 1; j < S.length; j++) {
            const num2 = S.slice(i, j)
            if (+num2 > bit32) break;

            const rest = S.slice(j)
            const result = isValid(num1, num2, rest, [num1, num2])

            if (result) return result;
            if (S[i] === '0') break;
        }
        if (S[0] === '0') break;
    }

    function isValid(num1, num2, rest, output) {
        const sum = (+num1 + +num2).toString();
        if (+sum > bit32) return false;
        output.push(sum)
        if (rest === sum) return output;
        if (rest.startsWith(sum)) return isValid(num2, sum, rest.slice(sum.length), output);
        return false;
    }
    return []


}

/// contain duplicate
function containDuplicate(nums) {
    let set = new Set();
    for (let i = 0; i < nums.length; i++) {
        if (set.has(nums[i])) return true;
        set.add(nums[i]);
    }
    return false;
}

// using hash table
function containDuplicate(nums) {
    let hash = {};
    for (let i = 0; i < nums.length; i++) {
        if (hash[nums[i]]) return true;
        hash[nums[i]] = true;
    }
    return false;
}

// using while loop
function containDuplicate(nums) {
    let i = 0;
    while (i < nums.length) {
        if (nums.indexOf(nums[i]) !== i) return true;
        i++;
    }
    return false;
}

function pali(s) {
    s = s.toLowerCase().replace(/[^a-z0-9]/gi, '');
    for (let i = 0, j = s.length - 1; i <= j; i++, j--) {
        if (s.charAt(i) !== s.charAt(j)) return false;
    }
    return true;
}

// nearest duplication in array
function nearestDuplicate(nums, k) {
    // in a way like nums[i] === nums[j] && Math.abs(i - j) <= k
    let hash = {};
    for (let i = 0; i < nums.length; i++) {
        if (hash[nums[i]] !== undefined && i - hash[nums[i]] <= k) return true;
        hash[nums[i]] = i;
    }
    return false;

}

// valid pali after removing one char
function validPali(s) {

    function isPali(s, left, right) {
        while (left < right) {
            if (s[left] !== s[right]) return false;
            left++;
            right--;
        }
        return true;
    }

    let left = 0;
    let right = s.length - 1;
    while (left < right) {
        if (s[left] !== s[right]) {
            return isPali(s, left + 1, right) || isPali(s, left, right - 1);
        }
        left++;
        right--;
    }
    return true;
}


// palidrome link list
function paliLinkList(head) {
    let slow = head;
    let fast = head;
    let stack = [];
    while (fast && fast.next) {
        stack.push(slow.val);
        slow = slow.next;
        fast = fast.next.next;
    }
    if (fast) slow = slow.next;
    while (slow) {
        if (slow.val !== stack.pop()) return false;
        slow = slow.next;
    }
    return true;
}