// Discussing strind Data Types in Programming Languages

// basically strings are a sequence of characters
// in JavaScript strings are represented by double quotes
// it mostaly work like an array of characters but it is not an array   

// creating a string
let str = "Hello World";
let str2 = 'Hello America';

// String Methods
// 1. charAt() - returns the character at the specified index
// 2. charCodeAt() - returns the unicode of the character at the specified index
// 3. concat() - joins two or more strings and returns a new string
// 4. endsWith() - checks whether a string ends with specified string/characters
// 5. fromCharCode() - converts unicode values to characters
// 6. includes() - checks whether a string contains the specified string/characters
// 7. indexOf() - returns the position of the first found occurence of a specified value in a string
// 8. lastIndexOf() - returns the position of the last found occurence of a specified value in a string
// 9. localeCompare() - compares two strings in the current locale
// 10. match() - searches a string for a match against a regular expression, and returns the matches
// 11. repeat() - returns a new string with a specified number of copies of an existing string

// String Methods
// String.length
// String.prototype.charAt()
// String.prototype.charCodeAt()
// String.prototype.concat()
// String.prototype.endsWith()
// String.prototype.includes()
// String.prototype.indexOf()
// String.prototype.lastIndexOf()
// String.prototype.localeCompare()
// String.prototype.match()
// String.prototype.repeat()
// String.prototype.replace()
// String.prototype.replaceAll()
// String.prototype.search()
// String.prototype.slice()
// String.prototype.split()
// String.prototype.startsWith()
// String.prototype.substr()
// String.prototype.substring()
// String.prototype.toLocaleLowerCase()
// String.prototype.toLocaleUpperCase()
// String.prototype.toLowerCase()
// String.prototype.toString()
// String.prototype.toUpperCase()
// String.prototype.trim()
// String.prototype.trimEnd()
// String.prototype.trimStart()
// String.prototype.valueOf()

class String {
    // this is called concatenation
    add(str1 , str2) {
        return str1 +" "+ str2;
    }
    // this is called interpolation
    add2(str1 , str2) {
        return `${str1} ${str2}`;
    }
    // this is called slicing
    slice(str) {
        return str.slice(0,5);
    }
    // this is called splitting
    split(str) {
        return str.split(" ");
    }
    // this is called replacing
    replace(str) {
        return str.replace("World","America");
    }
    // this is called searching
    search(str) {
        return str.search("World");
    }
    // this is called trimming
    trim(str) {
        return str.trim();
    }
    // this is called lowercasing
    lower(str) {
        return str.toLowerCase();
    }
    // this is called uppercasing
    upper(str) {
        return str.toUpperCase();
    }
    // this is called charAt
    charAt(str) {
        return str.charAt(0);
    }
    // this is called charCodeAt
    charCodeAt(str) {
        return str.charCodeAt(0);
    }
    // this is called concat
    concat(str1 , str2) {
        return str1.concat(str2);
    }
    // this is called endsWith
    endsWith(str) {
        return str.endsWith("World");
    }
    // this is called includes
    includes(str) {
        return str.includes("World");
    }
    // this is called indexOf
    indexOf(str) {
        return str.indexOf("World");
    }
    // this is called lastIndexOf
    lastIndexOf(str) {
        return str.lastIndexOf("World");
    }
    // this is called match
    match(str) {
        return str.match("World");
    }
    // this is called repeat
    repeat(str) {
        return str.repeat(2);
    }
    // this is called replaceAll
    replaceAll(str) {
        return str.replaceAll("World","America");
    }
    // this is called search
    search(str) {
        return str.search("World");
    }
    
}

const string = new String();
console.log(string.add(str,str2));
// test all the methods above and see what they do


// Discussing String Methods


// function that will return it string are lower case to upper case and vice versa
function swapCase(str) {
    return str.split("").map((char) => {
        if(char === char.toUpperCase()) {
            return char.toLowerCase();
        }
        else {
            return char.toUpperCase();
        }
    }).join("");
}

console.log(swapCase("Hello World"));


// sort the numeric string in ascending order
function sortString(str) {
    return str.split("").sort().join("");
}

console.log(sortString("9012345678"));

// return a string with max repeated character
function maxRepeatedChar(str) {
    let charMap = {};
    let maxChar = "";
    let maxCount = 0;
    str.split("").forEach((char) => {
        if(charMap[char]) {
            charMap[char]++;
        }
        else {
            charMap[char] = 1;
        }
    });
    for(let char in charMap) {
        if(charMap[char] > maxCount) {
            maxCount = charMap[char];
            maxChar = char;
        }
    }
    return maxChar;
}

console.log(maxRepeatedChar("Hello World"));