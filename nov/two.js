// Pratice time
// Array sorting algo 
// Insertion Sort it will sort item in array and put in it right position 
// using for loop 
// worst Case o(n^2)
function insertionSort (arr) {
	for( var i=0; i<arr.length; i++) {
		let current = arr[i];
		for(var j=i-1; j>=0 && arr[j] > current; j--){
			arr[j+1]=arr[j];
		}
		arr[j+1]=current;
	}
	return arr;
}

console.log(insertionSort([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]));

// using while Loop Same code
function insertionSortW(arr){
	for(var i=0; i<arr.length; i++){
		let current =arr[i];
		let j=i-1;
		while(j>=0 && arr[j] > current){
			arr[j+1]=arr[j];
			j--;
		}
		arr[j+1] = current
	}
	return arr
}
console.log(insertionSortW([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]));


function selectionSort(arr){
	for(var i=0; i<arr.length; i++){
		for(var j=0; arr.length; j++){
			if(arr[i] <arr[j]){
				let tem=arr[i];
				arr[i]=arr[j]
				arr[j]=tem
			}
		}
	}
	return arr;
}


// Bubbole sort
// Very poor
// O(n^2) 
function bubboleSort(arr){
	for(var i=0; i<arr.length; i++){
		for(var j=0; i<arr.length; j++){
			if(arr[j] >arr[j+1]){
				let temp = arr[i]
				arr[j]=arr[j+1];
				arr[j+1]=temp
			}
		}
	}
	return arr
}

// Bubbule SOrt In OPtimze wAY 
function Obubble(arr){
	let swipItems = false 
		for(var i=0; i<arr.length; i++){
			for(var j=0; j<arr.length; j++){
				if(arr[j] > arr[j+1]){
					let temp = arr[i]
					arr[j]=arr[j+1];
					arr[j+1]=temp;
					swipItems=true;
				}
			}

			if(swipItems === false){
				break
			}
		}
		return arr
}


// Insertion sort 
// place smallest item at firts 
function SeSort(arr){
	for(var i=0; i<arr.length; i++){
		for(var j=0; j<arr.length; j++){
			if(arr[i] < arr[j]){
				let temp =arr[i]
				arr[i]=arr[j]
				arr[j]=temp;				
				// swap at first position
				
			}
		}
	}
	return arr
}

// Inserrtion Sort 
// stable of all 
function InSort(arr) {
	for(var i=0; i<arr.length; i++){
		let current = arr[i] 
		let previus = i-1
		while(previus >=0 && arr[previus] > current) {
			arr[j+1]=arr[j]  // swap 
			j--
		}
		arr[j+1]=current // insert
	}
	return arr
} 
function InSG(arr) {
	for(var i=0; i<arr.length; i++){
		let current=arr[i]
		for(var j=i-1; j>=0 && arr[j]>current; j--) {
			arr[j+1]=arr[i]
		}
		arr[j+1]=current
	}
	return arr;
}
// Dealing with matrix 
// 2 D arrays 

// example of matrix
const twoD= [
     [1, 2, 3],
     [4, 5, 6],
     [7, 8, 9]
 ];

 function matrix(mat){
 	for(var i=0; i<mat.length; i++){
 		for(var j=0; j<mat[i].length; j++){
 			console.log(mat[i][j])
 		}
 	}
 };
 matrix(twoD);
 // for Searching 
 function SearchM(mar ,tar){
 	for(var i=0; i<mar.length; i++){
 		for(var j=0; j<mar[i].length; j++){
 			if(mar[i][j] === tar){
 				return true
 			}
 		}
 	}
 	return false
 }

 // Add all items in matrix
 function AddMart(arr){
 	let sum =0;
 	for(var i=0; i<arr.length; i++){
 		for(var j=0; j<arr[i].length; j++){
 			sum +=arr[i][j]
 		}
 	}
 	return sum;
 }
console.log("Sum IS ===",AddMart(twoD))

// Tanspose Matrix
function Tanspo(arr){
	console.log("====",arr)
	for(var i=0; i<arr.length; i++){
		for(var j=i; j<arr[i].length; j++){
			let temp = arr[i][j];
			arr[i][j]=arr[j][i]
			arr[j][i]=temp;
		}
	}
	return arr
}

console.log(Tanspo(twoD))
 
// Binary serach 
function BinarsySerch(arr , target){
	let start =0
	let end =arr.length -1
	while(start <= end){
		let mid=Math.floor((start+end)/2)
		if(arr[mid] === target){
			return arr[mid]
		}else if(arr[mid] < target){
			start= mid+1;
		}else{
			end = mid -1;
		}
	}
	return false
}

 // seraching in sorted Matrix  Binaray serach 
function SortBiMa(arr, target){
	let i=0 // start
	let j=arr[0].length-1 // end
	while(i< arr.length && j>=0){
		if(arr[i][j] === target){
			return arr[i][j]
		}else if(arr[i][j] <target){
			i++
		}else{
			j--
		}
	}
	return false
 }
console.log("searchSortedMatrix", SortBiMa(twoD, 5));

// spirat Print a matrix
function SPiralMatrix(arr){
	let arry =[];
	let startRow=0;
	let endRow=arr.length-1;
	let startCol=0;
	let endCol=arr[0].length-1;

	while(startRow <=endRow && startCol <=endCol ){
		// for top Row
		for(var i=0; i<=startCol; i++){
			arry.push(arr[i][endCol])
		}
		startRow--;
		// for right Col;
		for(var j=startRow; j<=endRow; j++){
			arry.push(arr[j][endCol])
		}
		endCol--
		

	}
}