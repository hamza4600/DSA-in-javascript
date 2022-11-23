// Bit Opertaors 
function And(num) {
	return (num & 1) === 1;
}
console.log("Number is even" , And(13))

// .. Lef SHift
function leftShift(num){
	return (num << 1);
}
console.log("Double numer " , leftShift(50))

function leftNum(a, b){
	return a << b;
}

console.log("multiply number by Second " , leftNum(50 ,10))

// RRight Shift 
function rightShift(num){
	return (num >> 1);
}
console.log("Divide numer by 2 " , rightShift(5057))


function rightNum(a, b){
	return a >> b;
}
console.log("Divide numer number by Second" , rightNum(50 ,10))

// XOR number 
function xor(num){
	return (num^5);
};
console.log("XOR",xor(10))
// if we xor num with same it become zero and with differnt num will add that num 

// Or a number
function Or(a, b) {
  return a | b;
}
console.log("Orrr", Or(10, 55))


//   check if num is power of 2 
function isPowerod(num){
	return (num & (num-1)) ===0
} 
console.log("isPowerOfTwo", isPowerod(8));

// return a single non repeted  num in array 
function isEven(arr){
	console.log("Runniong")
	let sum =0; 
	for(var i=0; i<=arr.length; i++) {
		sum = sum ^arr[i]
	}
	return sum;
}
console.log(
  "everyNum",
  isEven([1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8])
);


// find bits
function findBits(num, i){
	return (num & (1<< i)) > 0;
}
console.log("findIBit", findBits(8, 2));

// Mutiplying
function setBit(num ,i){
	return num | (1 << i);
}
console.log("setIBit", setBit(8, 10));

function Mutli(num){
	let aa = num << 1;
	let bb = num >> 1;
	console.log(aa , bb)
}
Mutli(10);


// find Right Most significat bit 
function MSB(num) {
	return num & ~(num-1)
}
console.log("findRightMostSetBit", MSB(82239));

// find missing item in sorted array
function missinItem(arr){
	let n = arr.length+1
	let sum = (n * (n+1))/2;
	let arrSum =0; 
	for(var i=0; i<arr.length; i++){
		arrSum += arr[i]
	}
	return sum - arrSum
}

console.log(
  "missingNum",
  missinItem([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ])
);

// using Bit manupulation
function BitMisSum(arr){
	let x1=0;
	let x2=0;
	for(var i = 0; i<arr.length; i++){
		x1=x1^arr[i];
	}
	for(var i=0; i<=arr.length+1; i++){
		x2=x2^i;
	}
	return x1^x2
}

console.log(
  "missingNum XOR",
  BitMisSum([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ])
);


// Reverse Bits in a Num
function ReverseBits(num){
	var result =0;
	for(var i=0; i <32; i++){
		result = result << 1;  // left shift result by 1 or multiply by 2
		result = result | (num & 1);
		num= num >> 1  // num = num /2
	}
	return result;
}

console.log("reverseBits", ReverseBits(1));


// Num of digits in Binary 
function NuD(n){
	let base =2;
	let ans = Math.log(n) / Math.log(base) +1 ;
	return ans;
}
console.log("noOfDigits", NuD(41));


// Magic Numb

function magiz(n){
	 let ans = 0;
  let base = 5;
  while (n > 0) {
    // loops run for set bits of n  for example 3 = 011  it runs 3 times
    let last = n & 1;
    n = n >> 1;
    ans += last * base;
    base = base * 5;
  }
  return ans;
}
console.log("magicNum", magiz(6));


// Add by Bits 
function AddB(a,b){
	while( b!== 0){
		let carry =  a&b;
		a= a^b;
		b = carry << 1;
	}
	return a
}
console.log("add", AddB(100, 100));


// Power By Bist 
function Power(power, base){
	let answer =1; 
	while( power >1){
		if((power &1) === 1) {
			answer*=base
		}
		base*=base;
		power = power >> 1
	}
	return answer
}

console.log("Power of Nmber s", Power(10, 10))


// sum Zero 
function Zero(arr){
	let left = 0;
	let right = arr.length -1;
	while (left < right) {
		let sum = arr[left]+arr[right];
		if(sum === 0){
			return arr[left] , arr[right]
		}else if(sum > 0){
			right --;
		} else {
			left --
		}
	}
	return false
}