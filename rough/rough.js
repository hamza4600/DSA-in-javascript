// binary search 
function binarySearch(arr , n) {
	let start =0;
	let end = arr.length-1;
	while(start <= end) {
		let mid = Math.floor((start + end)/2);
		if(arr[mid] === n) {
			return true
		}else if (arr[mid] < n) {
			start = mid +1;
		} else {
			end = mid -1
		}
	}
	return true
};

// find item index 
function findIndex(arr , i) {
	for(var i=0; i<=arr.length ; i++) {
		if(arr[i] === i) {
			return true
		}
	}
	return false
};

// find max and Min value in array 
function Maxmin(arr) {
	let min =arr[0];
	let max =arr[0];
	for(let i=0; i<=arr.length; i++) {
		if(arr[i] < min) {
			min = arr[i]
		}
		if(arr[i] > max) {
			max = arr[i]
		}
	}
	return max , min
};

// sorting array 
function sorrtArray(arr) {
	//  make two loops 
	for (var i = 0; i < arr.length; i++) {
		for (var j= 0; j< arr.length;j++) {
			if(arr[i] <arr[i] ) {
				let tem = arr[i];
				arr[i] = arr[j];
				arr[j] = tem;
			}
		}
	}
	return arr;
}
 let arr = [1,2,3,4,5,6,710,15,200,100]

console.log(sorrtArray(arr))