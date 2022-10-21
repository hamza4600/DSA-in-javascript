// coding challange

// two sum
// given an array of integers, return indices of the two numbers such that they add up to a specific target
function twoSum(arr, target) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        result.push(i, j);
      }
    }
  }
  return result;
}

// convert to array
// x.

function isParlidrominal(num) {
  let numStr = num.toString();
  let reverse = numStr.split("").reverse().join("");
  return numStr === reverse;
}
function isPaldrinaml(num) {
  for (var i = 0; i < num.length / 2; i++) {
    if (num[i] !== num[num.length - 1 - i]) {
      return false;
    }
  }
}

// remove duplicates from sorted array
// given a sorted array nums, remove the duplicates in-place such that each element appear only once and return the new length.
var removeDuplications = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) {
      nums.splice(i, 1);
      i--;
    }
  }
  return nums;
};
// test
const arr = [1, 1, 2, 3, 4, 4, 5, 5, 6, 7, 7, 8, 9, 9, 10];
console.log(removeDuplications(arr));

// best asymptotic sort algorithm ?
// answer: merge sort and quick sort and radix sort and heap sort

// remove Element
function removeElement(nums, val) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      nums.splice(i, 1);
      i--;
    }
  }
  return nums.length;
}

// Search Insert Position
function searchInsert(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= target) {
      return i;
    }
  }
  return nums.length;
}

// in O(log n) time
function searchInsert(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return left;
}

// largest number
// input [1,2,3]
// output [1,2,4]
// input [4,3,2,1]
// output [4,3,2,2]
function plusOne(digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] < 9) {
      digits[i]++;
      return digits;
    } else {
      digits[i] = 0;
    }
  }
  digits.unshift(1);
  return digits;
}

// string Properties
// challange
function stripProperties(obj, arr) {
  for (let key in obj) {
    if (arr.includes(key)) {
      delete obj[key];
    }
  }
  return obj;
}

// challange 2
// User warning Data
// creat a class User and its methods constructor take a single parameter userName and set user name to it
//getUserName method return the user name
// setUserName method take a single parameter userName and set user name to it

class User {
  constructor(userName) {
    this.userName = userName;
  }
  getUserName() {
    return this.userName;
  }
  setUserName(userName) {
    this.userName = userName;
  }
}

// creat a  class useChart
//constructor take a single parameter userName and set user name to it and initial warning count to 0
// giveWarning() method increase warning count by 1
// getWarningCount() method return warning count
class UserChart {
  constructor(userName) {
    this.userName = userName;
    this.warningCount = 0;
  }
  giveWarning() {
    this.warningCount++;
  }
  getWarningCount() {
    return this.warningCount;
  }
}

// creat a user Class with following methods
// constructor take userName and set user name
// getUserName() method return user name
// setUserName() method take userName and set user name
class Userx {
  constructor(userName) {
    this.userName = userName;
  }
  getUserName() {
    return this.userName;
  }
  setUserName(userName) {
    this.userName = userName;
  }
}
// user it
//
const user = new Userx("mohamed");
console.log(user.getUserName());
user.setUserName("ahmed");
console.log(user.getUserName());

// Parking a lot
// create a class ParkingLot with following methods
// constructor take a slot parameter  size of parking lot slots are numbered from 1 to slot

// park() method take a carId it park car give carId at uncuupied slot with the lowest number and  return true . if all slots are occupied return false

//  method getSlots return an array of all paked  slots where i is the id of car parked in slot i or null if slot is unoccupied

// remove(carId) free slot where car is  parked  and return true . It will return false it car with give carId is not found

// no two cars have same carId

//
class ParkingLot {
  constructor(slot) {
    this.slot = slot;
    this.parked = [];
  }
  park(carId) {
    for (let i = 0; i < this.slot; i++) {
      if (this.parked[i] === undefined) {
        this.parked[i] = carId;
        return true;
      }
    }
    return false;
  }
  getSlots() {
    return this.parked;
  }
  remove(carId) {
    for (let i = 0; i < this.slot; i++) {
      if (this.parked[i] === carId) {
        this.parked[i] = undefined;
        return true;
      }
    }
    return false;
  }
}

// Activity List
// create a function Activity that take a single parameter  number assign it all members amount
// setAmount if  value is less than 0 return false   method take a single parameter amount and set to the members and true .

function Activity(amount) {
  this.amount = amount;

  this.setAmount = function (amount) {
    if (amount < 0) {
      return false;
    }
    this.amount = amount;
    return true;
  };
  this.getAmount = function () {
    return this.amount;
  };
}

function Payment(amount, reciever) {
  this.setReciever = function (reciever) {
    this.reciever = reciever;
  };
  this.getReciever = function () {
    return this.reciever;
  };
}

function Refund(amount, sender) {
  this.setSender = function (sender) {
    this.sender = sender;
  };
  this.getSender = function () {
    return this.sender;
  };
}

function Slides({ slides }) {
  // slider is an array of objects
  //The Slides component takes an array of slides as a prop. Each element of this array denotes a single slide and is an object with 2 properties: string
  // On application launch, the first slide must be rendered.
  // Clicking on the "Next" button shows the next slide. This button is disabled when the current slide is the last one.
  // Clicking on the "Previous" button shows the previous slide. This button is disabled when the current slide is the first one.
  // Clicking on the "Restart" button shows the first slide.
  // you can also assume slider array contain at least one slide
  // write code for task
  // no library is allowed
  // in React js
  // function component
  // no class component

  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [isFirstSlide, setIsFirstSlide] = React.useState(true);
  const [isLastSlide, setIsLastSlide] = React.useState(false);
  const [isRestart, setIsRestart] = React.useState(false);
  const [isNext, setIsNext] = React.useState(false);

  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
      setIsFirstSlide(false);
      setIsLastSlide(false);

      if (currentSlide === slides.length - 2) {
        setIsLastSlide(true);
      }
    }
  };

  const handlePrevious = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
      setIsLastSlide(false);
      setIsRestart(false);

      if (currentSlide === 1) {
        setIsFirstSlide(true);
      }
    }
  };

  const handleRestart = () => {
    setCurrentSlide(0);
    setIsFirstSlide(true);
    setIsLastSlide(false);
    setIsRestart(true);
  };

  return (
    <>
      <div>
        <div>
          <button data-testid="button-restart" className="small outlined">
            Restart
          </button>
          <button data-testid="button-prev" className="small">
            Prev
          </button>
          
          <button  disabled={isLastSlide} data-testid="button-next" className="small">
            Next
          </button>
        </div>
        <div>
          {/* slider */}
          {slides.map((slide, index) => {
            if (index === currentSlide) {
              return (
                <div key={index}>
                  <h1>{slide.title}</h1>
                  <p>{slide.text}</p>
                </div>
              );
            }
            return null;
          })}
        </div>
      </div>
    </>
  );
}


// second challange 
// sort an array
function Artical({artical}){
    const [newArr, setNewArr] = React.useState(artical);
    const [isSort, setIsSort] = React.useState(false);

    // in newArr we have date and title and upvote 
    // sort newArr by date 
    function sortByDate(){
        newArr.sort((a,b)=>{
            return new Date(b.date) - new Date(a.date);
        })
        setNewArr([...newArr]);
    }
    // sort by upvote
    function sortByUpvote(){
        newArr.sort((a,b)=>{
            return b.upvote - a.upvote;
        })
        setNewArr([...newArr]);
    }
}