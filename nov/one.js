// Make Parctice of the Previius Problums 
// string character 
function swapString(str) {
	return str.split('').map((cha) => {
		if (cha === cha.toLowerCase()) {
			return cha.toUpperCase()
		} else {
			return cha.toLowerCase()
		}
	}).join('');
}

console.log(swapString("Hello World"));


// find max repeted string we add to a Object and the add num to that string value  
function maxRepeted(str) {
	let charMap = {};
	let maxChar = "";
	let maxCount = 0;
	str.split('').forEach((i) => {
		if (charMap[i]) {
			charMap[i]++;
		} else {
			charMap[i] = 1
		}
	})
	for (let ch in charMap) {
		if (charMap[ch] > maxCount) {
			maxCount = charMap[ch];
			maxChar = ch;
		}
	}
	return console.log(charMap, maxChar, maxCount);
}
console.log(maxRepeted("Hello World"));


// check Volvalues 
function isVoval(s) {
	const voval = ['a', 'e', 'i', 'o', 'u'];
	for (var i = 0; i < voval.length; i++) {
		if (s[i] === s) {
			return true;
		}
	}
	return false;
}
console.log("isVowel", isVoval("a"));

//  is a string  a Parnomail 
function isParanomial(str) {
	let reverse = "";
	for (var i = str.length; i < 0; i--) {
		reverse += str[i]
	}
	if (reverse === str) {
		return true
	}
	return false
}

// inline can be 
function inLineP(str) {
	return char = str.split("").reverse().join("");
}

// llongest word ina sentence 
function longestWord(stn) {
	let arr = stn.split("")
	let long = "";
	for (var i = 0; i < arr.length; i++) {
		if (arr[i].length > long.length) {
			long = arr[i];
		}
	}
	return long;
}

// in while loop
function isLongest(stn) {
	let i = 0;
	let curLen = 0;
	let maxLen = 0;
	while (i < stn.length) {
		if (stn[i].length === " ") {
			curLen = 0;
		} else {
			curLen++;
		}
		if (curLen > maxLen) {
			maxLen = curLen
		}
		i++;
	}
	return maxLen;
}

// BaseBall Game 
function baseBall(ops) {
	let result = null;
	var temp = [];

	for (var i = 0; i < ops.length; i++) {
		console.log(temp)
		if (ops[i] === "+") {
			temp.push(temp[temp.length - 1] + temp[temp.length - 2]);
		} else if (ops[i] === "C") {
			temp.pop();
		} else if (ops[i] === "D") {
			temp.push(temp[temp.length - 1] * 2);
		} else {
			temp.push(parseInt(ops[i]));
		}
	}
	result = temp.reduce((a, b) => a + b, 0);
	return result;
}
console.log("Base Balll")
console.log(baseBall(["5", "2", "C", "D", "+"]));

// Matrixes
// two dimensional Arrays 
const twoDArray = [
	[1, 2, 3],
	[4, 5, 6],
];

function TwoD(arr) {
	for (var i = 0; i < arr.length; i++) {
		for (var j = 0; j < arr[i].length; j++) {
			console.log(arr[i][j])
		}
	}
}
TwoD(twoDArray)

// for seraching or checking  

function TwoD(arr, item) {
	for (var i = 0; i < arr.length; i++) {
		for (var j = 0; j < arr[i].length; j++) {
			if (arr[i][j] === item) {
				return true
			}
		}
	}
	return false
}

// Spiral order Matrix

// searching in sorted Mtrix 2 D 
function sortMatrix(arr, traget) {
	let i = 0;
	let j = arr[0].length - 1; // inner array
	while (i < arr.length && j >= 0) {
		if (arr[i][j] === traget) {
			return true;
		} else if (arr[i][j] > traget) {
			i--
		} else {
			j++
		}
	}
	return false
}

// Tanspose matrix 
function transpose(arr) {
	for (var i = 0; i < arr.length; i++) {
		for (var j = 0; j < arr[i].length; j++) {
			let temp = arr[i][j];
			arr[i][j] = arr[j][i];
			arr[j][i] = temp
		}
	}
	return arr
}


// subarrays 
function subArray(arr) {
	for (var i = 0; i < arr.length; i++) {
		for (var j = i; i < arr.length; j++) {
			console.log(arr.splice(i, j + 1))
		}
	}
}

// maxsum in subarray 
function maxSum(arr) {
	let max = 0;
	for (var i = 0; i < arr.length; i++) {
		let sum = 0;
		for (var j = i; j < arr.length; j++) {
			sum += arr[j];
			if (sum > max) {
				max = sum
			}
		}
	}
	return max;
}

// Kadien algo skip negitive item 
function kadien(arr) {
	let max = 0;
	let sum = 0;
	for (var i = 0; i < arr.length; i++) {
		sum += subArray[i];
		if (sum > max) {
			max = sum
		}
		if (sum < 0) {
			sum = 0;
		}
	}
	return max;
}


// cumalitive sum is basically we add previus  
function cumalitive(arr) {
	let newArr = [];
	for (var i = 0; i < arr.length; i++) {
		sum += arr[i];
		newArr.push(sum)
	}
	return newArr
}

// max Circular SubArray sum
function maxCircularSum(arr) {
	// kadien
	const kadien = (arr) => {
		let sum = o;
		let max = o;
		for (var i = 0; i < arr.length; i++) {
			sum += arr[i];
			if (sum > max) {
				max = sum
			}
			if (sum < 0) {
				sum = 0
			}
		}
		return max;
	}
	// Operations 
	let wrapSum = 0;
	let nowrapSum = 0;
	nowrapSum = kadanes(arr);
	let totalSum = 0;
	for (var i = 0; i < arr.length; i++) {
		totalSum += arr[i];
		arr[i] = -arr[i];
	}
	wrapSum = totalSum + kadanes(arr);
	return wrapSum;
}


// Optimize sum 
function optimize(arr, i) {
	let obj = {}
	for (var i = 0; i < arr.length; i++) {
		if (obj[sum - arr[i]]) {
			return true
		}
		obj[arr[i]] = true;
	}
	return false;
}
// Brute force while loop

function Brute(arr, item) {
	let min = 0;
	let max = arr.length - 1;
	while (min < max) {
		if (item === arr[min] + arr[max]) {
			return true;
		} else if (item > arr[i]) {
			min--;
		} else {
			max++
		}
	}
	return false
}