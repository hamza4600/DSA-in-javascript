
//getGrade
function getGrade(score) {
    let grade;
    // Write your code here
    if (score > 25 && score <= 30) {
      grade = "A";
    } else if (score > 20 && score <= 25) {
      grade = "B";
    } else if (score > 15 && score <= 20) {
      grade = "C";
    } else if (score > 10 && score <= 15) {
      grade = "D";
    } else if (score > 5 && score <= 10) {
      grade = "E";
    } else if (score > 0 && score <= 5) {
      grade = "F";
    }
    return grade;
  }
  
  //getLetter
  function getLetter(s) {
    let letter;
    // Write your code here
    switch (true) {
      case "aeiou".includes(s[0]):
        letter = "A";
        break;
      case "bcdfg".includes(s[0]):
        letter = "B";
        break;
      case "hjklm".includes(s[0]):
        letter = "C";
        break;
      case "npqrstvwxyz".includes(s[0]):
        letter = "D";
        break;
    }
    return letter;
  }
  
  // if num is even multiply by 2 and if num is odd multiply by 3
  function modifyArray(nums) {
    let arr = [];
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] % 2 === 0) {
        arr.push(nums[i] * 2);
      } else {
        arr.push(nums[i] * 3);
      }
    }
    return arr;
  }
  
  // input "1234"
  // output 4321
  // use try catch
  function reverseString(s) {
    try {
      s = s.split("").reverse().join("");
    } catch (e) {
      console.log(e.message);
    } finally {
      console.log(s);
    }
  }
  
  // dates in javascript
  // input 10/11/2009
  // input 2
  //output wednesday
  // output Sunday
  function getDayName(dateString) {
    let dayName;
    // Write your code here
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const date = new Date(dateString);
    dayName = days[date.getDay()];
    return dayName;
  }
  
  // isPositive function
  function isPositive(a) {
    if (a > 0) {
      return "YES";
    } else if (a === 0) {
      throw new Error("Zero Error");
    } else {
      throw new Error("Negative Error");
    }
  }
  
  // // Rectangle function
  // function Rectangle(a, b) {
  //   this.length = a;
  //   this.width = b;
  //   this.perimeter = 2 * (a + b);
  //   this.area = a * b;
  // }
  
  // Count Objects
  function getCount(objects) {
    let count = 0;
    for (let i = 0; i < objects.length; i++) {
      if (objects[i].x === objects[i].y) {
        count++;
      }
    }
    return count;
  }
  
  // Classes
  
  Rectangle.prototype.area = function () {
    return this.w * this.h;
  };
  /*
   * Create a Square class that inherits from Rectangle and implement its class constructor
   */
  class Square extends Rectangle {
    constructor(w, h, area) {
      super(w, h);
    }
    area = function () {
      return this.w * this.w;
    };
  }
  
  // Template Literals
  function sides(literals, ...expressions) {
    const [a, p] = expressions;
    const root = Math.sqrt(p * p - 16 * a);
    const s1 = (p + root) / 4;
    const s2 = (p - root) / 4;
  
    return [s1, s2].sort();
  }
  
  // Bitwise Operators
  function getMaxLessThanK(n, k) {
    let max = 0;
    for (let i = 1; i < n; i++) {
      for (let j = i + 1; j <= n; j++) {
        let bitwise = i & j;
        if (bitwise < k && bitwise > max) {
          max = bitwise;
        }
      }
    }
    return max;
  }
  
  // Classes
  class Polygon {
    constructor(sides) {
      this.sides = sides;
    }
    perimeter() {
      return this.sides.reduce((a, b) => a + b);
    }
  }
  
  
  // Regular Expressions
  function regexVar() {
      /*
       * Declare a RegExp object variable named 're'
       * It must match a string that starts with 'Mr.', 'Mrs.', 'Ms.', 'Dr.', or 'Er.', 
       */
      
      /*
       * Do not remove the return statement
       */
      // it must match all occurance of Numbers in a string
      let re = /\d+/g;
      return re;
  
  }
  
  
  
  
  // Create a button element
  const button = document.createElement("button");
  button.innerHTML = 0;
  document.body.appendChild(button);
  
  // Add an event listener on Click and increment the button value
  button.addEventListener("click", () => {
      button.innerHTML = parseInt(button.innerHTML) + 1;
      }
  );
  
  // how to apply css on id bas 
  
   
  