/*
Interview Questions
1. What are your technical skills?
2. Difference between useCallback and useMemo and where they can be used.
3.    Explain the concept of closure in javascript


Live coding questions
1. Find the longest substring of a string without repeating any characters
2. Write a simple react component with a counter that increments every second by a random number between 1 & 10 inclusive and resets to 0 when it reaches 60.


*/
// hacker rank coding challange
// character swap
// given a string repeat this operation zero or more times to creat a lexicographically smallest  string possible select two charatcters that exist in the string and c1 and c2  replace all occurences of c1 with c2 and c2 with c1
// example
// s ='bbcacad'
// c1 = 'b' c2 = 'a' after swaping s = 'aacbcbd'
// c1 = 'b' c2 = 'c' after swaping s = 'aabcbcd'
// it is proven that  lexicographically smalles string can be obtained by this operation to return 'aabcbcd'
// complet function getString in the editor below
// retrun string lexicographically smallest string that can be \

function getString(s) {
  let arr = s.split("");
  let sortedArr = arr.sort();
  let sortedString = sortedArr.join("");
  return sortedString;
}
// some test cases failed wriet better code of all test cases pass

function getStringBetter(s) {
  // input is a string
  // s ='abbbe' return 'abbbe' because it is already lexicographically smallest
  //  soultion is
  let arr = s.split("");
  if (arr.length === 1) return s;
  // is already lexicographically smallest return s
  let sortedArr = arr.sort();
  if (sortedArr.join("") === s) return s;
  // if not sort the array and return the sorted string
  let sortedString = sortedArr.join("");
  return sortedString;
}

// mergin palindromes
// given two strings find all palidromes that can be formed with letters from both strings from those palidrominal select one for each when combined and rearragend produce the longest palidrome possible and if there are multiple palidromes of same length return smallest palidrome
// example
// aab and cca return acaca
// explanation ['a', 'a'] can be picked from first string to form aa charstes ['c','c','a'] can be picked from second string to form 'acaca' which is the longest palidrome possible

function mergePalindromes(s1, s2) {
  // input is two string
  // output is a string
  // solution
  // first check if both string are empty
}

//  coding challange
//
// return type  fo bootstrap is a function frm types
// function Notification(props) {
//     const {
//         message,
//         type,
//     } = props;

//     const showType = () => {
//         switch (type) {
//             case 'success':
//                 return 'success';
//             case 'error':
//                 return 'error';
//             case 'warning':
//                 return 'warning';
//             case 'info':
//                 return 'info';
//             default:
//                 return 'info';
//         }
//     }

//     // if no message return null
//     if (!message) return null;
//     return (
//         <div className={`notification ${showType()}`}>
//             <div className="notification__message">
//                 {message}
//             </div>
//         </div>
//     )
// }

// assemlbe line coding challange
class AssemlbyLine extends React.Component {
  // constructor(props) {
  //     super(props);
  //     this.state = {
  //         line: [],
  //         total: 0,
  //     }
  // }

  // addLine = () => {
  //     let { line } = this.state;
  //     let newLine = [...line, 0];
  //     this.setState({ line: newLine });
  // }

  // removeLine = () => {
  //     let { line } = this.state;
  //     let newLine = [...line];
  //     newLine.pop();
  //     this.setState({ line: newLine });
  // }

  // updateLine = (index, value) => {
  //     let { line } = this.state;
  //     let newLine = [...line];
  //     newLine[index] = value;
  //     this.setState({ line: newLine });
  // }

  // calculateTotal = () => {
  //     let { line } = this.state;
  //     let total = line.reduce((acc, curr) => acc + curr, 0);
  //     this.setState({ total });
  // }

  // render() {
  //     let { line, total } = this.state;
  //     return (
  //         <div className="assembly-line">
  //             <div className="assembly-line__line">
  //                 {
  //                     line.map((item, index) => (
  //                         <div className="assembly-line__line__item">
  //                             <input type="number" value={item} onChange={(e) => this.updateLine(index, e.target.value)} />
  //                         </div>
  //                     ))
  //                 }
  //             </div>
  //             <div className="assembly-line__buttons">
  //                 <button onClick={this.addLine}>Add Line</button>
  //                 <button onClick={this.removeLine}>Remove Line</button>
  //                 <button onClick={this.calculateTotal}>Calculate Total</button>
  //             </div>
  //             <div className="assembly-line__total">
  //                 Total: {total}
  //             </div>
  //         </div>
  //     )
  // }
  //  componet Look like this
  /*  <AssemblyLine 
            stages = {[
                'Ideas, Development, Testing, Deployment, ]}
        />


    */
  //  solution
  constructor(props) {
    super(props);
    this.state = {
      array: [],
      currentStage: 0,
    };
  }

  render() {
    return (
      <>
        <div className="assembly-line">
          <div>
            Add a item
            <input
              type="text"
              onChange={(e) => {
                let { array } = this.state;
                let newStages = [...array, e.target.value];
                this.setState({ array: newStages });
                e.target.value = "";
              }}
              onKeyPress={(e) => {
                //  add at the begining of the array
                if (e.key === "Enter") {
                  let { stages } = this.state;
                  let newStages = [e.target.value, ...stages];
                  this.setState({ stages: newStages });
                  e.target.value = "";
                }
              }}
            />
          </div>
          <div className="assembly-stages">
            // show the stages and show array items in first index of stage if
            click on array items move to next stage and if it is in last stage
            remove it from array
            {stages.map((stage, index) => (
              <div className="assembly-stage">
                <div className="assembly-stage__title">{stage}</div>
                <div className="assembly-stage__items">
                  {array.map((item, index) => (
                    <div
                      className="assembly-stage__item"
                      // onClick={() => {
                      //     let { array, currentStage } = this.state;
                      //     if (currentStage === index) {
                      //         let newArray = [...array];
                      //         newArray.splice(index, 1);
                      //         this.setState({ array: newArray });
                      //     }
                      // }}
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
            {/* {Array.isArray(this.props.stages) && this.props.stages.map((stage, index) => (
                            <div
                                key={index}
                            >
                                {stage}

                            </div>
                        ))} */}
          </div>
        </div>
      </>
    );
  }
}

//  coding challange
/*
    The component must render a number of elements for the testing suite to use, all of which will be accessed by class and index (specifically, the test code will retrieve the n-th stage or the n-th item in a stage by class name). Here is the complete list of elements that must be rendered along with their behavioral specifications:

An HTML element <input class="assembly-add-item" /> should be provided for input. The testing suite will call onChange to add text and onKeyPress with the Enter key to submit the value. The input field's value, upon Enter being pressed, will be added to the beginning of the first stage's item list and the .assembly-add-item element will be cleared. Items can be added at any time.
A series of <div class="assembly-stage"></div> children should be provided, each representing the corresponding n-th stage in the assembly line as defined by props.stages. The number of stages will be equal to the length of props.stages provided to the component and will be fixed throughout one mount cycle. props.stages[0] is the name of the first stage and is the entry point for any items newly reated by .assembly-add-item, while props.stages[props.stages.length-1] is the name of the last stage. You may assume that props.stages will never be given as an empty array (but if you have time to write a validation for it, that's a bonus!). The testing suite will not check that these stage name strings were rendered, but it's recommended to do so to help identify stages as you work.
A series of <button class="assembly-item"></button> elements, which represent the items residing in a particular .stage element. The text content of an .assembly-item will be a string from a previous .assembly-add-item submission. As described above, this button accepts left- and right-click (context menu) events, which move it forwards or backwards, respectively, through the stages of the assembly line. As with stages, the n-th .assembly-item child of a list should correspond to the n-th item in that list conceptually.

Move items between stages 
Once added, items can be left-clicked by the user to be moved to the next stage. If an item is in the last stage and is left-clicked, it is deleted entirely. Conceptually, you could think of an item which progresses beyond the last stage as a task having been finished or a product which was deployed.

Items can also be right-clicked, moving them backwards to the previous stage, and are deleted if they are moved backwards past the first stage. Conceptually, moving an item backwards to the point of deletion could represent an idea that was rejected or a product that was defective and never made it through the assembly process.

Items cannot skip stages or be deleted midway through the line--they have to be moved all the way beyond one edge or another in order to be removed from the assembly line.

Furthermore, when an item is moved backwards to the previous stage, it should be appended to the list of items currently at that stage. When an item is moved forward to the next stage, it should be prepended to the list for its new stage 

class AssemblyLine extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            stages: this.props.stages,
            items: [],
            currentStage: 0,
        }
    }

    render() {
        const { stages, items, currentStage } = this.state;
        const total = items.length;
        return (
            <div className="assembly-line">
                <div>
                    Add a item
                    <input
                        type="text"
                        className="assembly-add-item"
                        onChange={(e) => {
                            let { items } = this.state;
                            let newItems = [ e.target.value , ...items];
                            this.setState({ items: newItems });
                            e.target.value = '';
                        }}
                        onKeyPress={(e) => {
                            //  add at the begining of the array
                            if (e.key === 'Enter') {
                                let { items } = this.state;
                                let newItems = [e.target.value, ...items];
                                this.setState({ items: newItems });
                                e.target.value = '';
                            }
                        }}
                    />
                </div>
                <div className="assembly-stages">
                    {
                        stages.map((stage, index) => (
                            <div className="assembly-stage">
                                <div className="assembly-stage__title">
                                    {stage}
                                </div>
                                <div className="assembly-stage__items">
                                    {
                                        items.map((item, index) => (
                                            <div className="assembly-stage__item"
                                                onClick={() => {
                                                    let { items, currentStage } = this.state;
                                                    if (currentStage === index) {
                                                        let newItems = [...items];
                                                        newItems.splice(index, 1);
                                                        this.setState({ items: newItems });
                                                    }
                                                }}
                                            >
                                                {item}
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        )
    }
}




*/

// /* creat javascript code that will replicated it self after 50 second like a virus */
// +
// +var code = "var code = '" + code + "';\n" +
// +	"var script = document.createElement('script');\n" +
// +	"script.innerHTML = code;\n" +
// +	"document.body.appendChild(script);\n" +
// +	"setTimeout(function(){\n" +
// +	"	var script = document.createElement('script');\n" +
// +	"	script.innerHTML = code;\n" +
// +	"	document.body.appendChild(script);\n" +
// +	"}, 50000);";
// +
// +/* creat a script tag and put the code inside it */
// +var script = document.createElement('script');
// +script.innerHTML = code;
// +
// +/* append the script tag to the body */
// +document.body.appendChild(script);

/// coding chall age js
// splice (index, 1) means remove 1 element from index
// cancel an event
// 1. event.preventDefault()
// custom new Object in js s
// let aa = new Object()

// native object in js
// O
// change background color of h1 using jquery
// $('h1').css('background-color', 'red')
// regular expression denot end of string
// $ means end of string
// how many web worker sub can run concurrently
// 4
// $("div#content,head") means
// select div with id content and head
//

// not is a keyword in js  and not is a property of object

// let arr = [1 , 'cd' , 2 ];
// delete arr[1];
// console.log(arr); // [1, empty, 2]
// console.log(arr.length); // 3

// C chall nage coding
// for(let i = 0; i < 5;) {
// %d is used to print integer

// read and write file in c

// we use fopen() to open a file in read mode and fopen() to open a file in write mode.
// we use fclose() to close a file.

// manage memory in c and also shrink which memeory is best
// malloc() and free() are used to allocate and deallocate memory dynamically in C.
// sizeof() is used to find the size of a variable or data type.
// 24/4 = 6
/*

    %d is used to print integer
    FILE *fp = fopen("file.txt", "r");
    if (fp == NULL)
    fflush(stdout); // flush the output buffer
    printf("Could not open file");

    // creata child process in c not impact parent process exicute simultaniously
    // fork() is used to create a child process which runs concurrently with the parent process.
    // wait() is used to make the parent process wait for the child process to complete its execution.
    // exit() is used to terminate the process.
    vfork() is used to create a child process which runs concurrently with the parent process.

    16 bit compiller allowable range for int is -32768 to 32767
   free memory allocated by calloc() using free().

   share state accross threads in amutli thread program which memory is best
    global variable is used to share state across threads in a multi-threaded program.
    
    void squre(int)

    int main() {

    }

    void squre(int a) {
      return a * a;
    }

    // output of this program is 4

    char *str = "Hello World";
    char *p =  s + 5
    printf(%c\t%c , *p, str[5]); // W W

    memcpy() is used to copy a block of memory from one location to another.
    memcpy(a , 'Hello' , 5); // output is Hello

    true about vector typ in c++
    vector is a dynamic array.
    vector is a template class.
    vector is a sequence container.
    vector is a container that encapsulates dynamic size arrays.

    register i = 20;
    register *j = &i;
    printf("%d", *j); // 20

    char a= 'A
    char b = 'B';
    printf("%d" , a&b);  // 64

    argv in c
    argv is a pointer to an array of character pointers.
    argv is a pointer to an array of strings.

    char a using sizeof is 1
    int a using sizeof is 4

     can we declear function after main in c
    yes

    int a = new int;
    *a = 10;
    printf("%d", *a + 1); // 11

    correct way to writte a file in c
    FILE *fp = fopen("file.txt", "wb"); // wb is write binary
    wr is write
    r is read 

    static int a = 10;  
    static int a = 20; // error 

    printf("%d", a++); // 10 

    correct about pointer in c
    pointer is a variable that stores the address of another variable.
    we can reassign a pointer to point to another variable.

    char a[10][5] = {"hi","c", "deveper" }
    printF("%s" ,a[2]) // developer

    SWAP is a macro in c used to swap two numbers
    #define SWAP(a, b) {int temp; temp = a; a = b; b = temp;} // swap two numbers


    allocate multiple block of memory in c  of same size
    calloc() is used to allocate multiple blocks of memory of the same size.

    float a = 10.5;
    if(a == 10.5) {
      printf("Hello");
    } else {
      printf("Hi");
    }

    /

    about sizeof(void) in 32 bit c compiler
    sizeof(void) is 1
    true about (void *)0 in c
    (void *)0 is a null pointer.

    true about return type id malloc and callocare not type casted
    malloc() and calloc() return void pointer. 

    static varible in c
    static variable is a variable that retains its value between function calls.

    copy a null terminated string  from one array into array dest 
    strcpy(dest, src);

    char t[20] = 'ABCDEFGHIJK';
    int s = strlen(t);
    t[3]  = '\0';
    s = strlen(t);
    printf("%d", s); // 3

    int arr[4][3] = {{1} ,{2,3}, {5,6}};
    printf("%d" , sizeof(arr)); // 48

    get pointer to a last occurance of a character in a string
    strrchr()  


    static int arr[] = {1,2,5};
    printf("%d", arr[-1] ,arr[5]); 
    
    register R = 10;
    int *p = &R;
    printf("%d", *p); // 10

    Data structure and algorithm
    1. array
    algorithm for findinding minumun spanning tree in graph 
    1. kruskal's algorithm

    not a balnce  binary tree
    1. AVL tree

    hash function  
    is a function that maps data of arbitrary size to data of fixed size.

    calculate distanc between each pair distinc point 
    fincd pair with minimum distance
    we can use brute force approach to solve this problem.

    subset sum problum can be solved using
    1. dynamic programming

     hamiltonian cycle in graph
    1. backtracking

    travaling salesman problem
    1. dynamic programming

    heapify is a function that converts a binary tree into a heap

    sorting 1 million number  
    we will use merge sort

    from heap worst case for removing random node time complexity is
    O(log n)

    serachin binary tree fro key 
    Tree serach(key, root) {
      if(root == NULL) {
        return NULL;
      }
      if(key == root->key) {
        return root;
      }
      if(key < root->key) {
        return TreeSearch(key, root->left);
      } else {
        return TreeSearch(key, root->right);
      }
    }

    sellection sort 
    for(let i = 0; i < n; i++) {
      let min = i;
      for(let j = i + 1; j < n; j++) {
        if(arr[j] < arr[min]) {
          min = j;
        }
      }
      let temp = arr[i];
      arr[i] = arr[min];
      arr[min] = temp;
    }

    let mid = low + (high - low) / 2;



      counting sort 
      function countingSort(arr, k) {
        let n = arr.length;
        let count = new Array(k + 1);
        for(let i = 0; i < n; i++) {
          count[arr[i]]++;

        }
        let index = 0;
        for(let i = 0; i < k + 1; i++) {
          while(count[i] > 0) {
            arr[index++] = i;
            count[i]--;

          }

      }

      best algo for sorting array of 99 elements
      1. insertion sort

      merge sort 
      function mergeSort(arr, low, high) {  
        if(low < high) {
          let mid = low + (high - low) / 2;
          mergeSort(arr, low, mid);
          mergeSort(arr, mid + 1, high);
          merge(arr, low, mid, high);
        }
      }


      bellman ford algorithm
      for i = 1 to V[g] - 1

      for each edge (u, v) in E[g]
        if d[v] > d[u] + w(u, v)
          d[v] = d[u] + w(u, v)
           
      for each edge (u, v) in E[g]
        if d[v] > d[u] + w(u, v)
          return false
      return true


      best algo for sorting if array is almost sorted
      1. insertion sort

      circular queue we can  enqueue and dequeue in O(1) time

      disadvantage of selection sort
      1. it is not stable it requie mem

      floyd warshall algorithm
      used to find all pair shortest path in a graph
      last step of floyd warshall algorithm
      1. check for negative weight cycle 
        dij(k) = min(dij(k), dij(k) + dkj(k))

        kruskal algorithm 
        is used to find minimum spanning tree in a graph
        kurkal algorithm can efficently used to disjoint  set  data structure
         which is  correct
        1. union by rank and path compression


        Breath first search
        is as  traversing algorithm   we also say it as level order traversal or breadth first search or p

        in BFS we use queue to store the node

        quick sort algorithm
        function quickSort(arr, low, high) {
          if(low < high) {
            let pi = partition(arr, low, high);
            quickSort(arr, low, pi - 1);
            quickSort(arr, pi + 1, high);
          }
        }

        bubble sort
        function bubbleSort(arr) {
          let n = arr.length;
          for(let i = 0; i < n; i++) {
            for(let j = 0; j < n - i - 1; j++) {
              if(arr[j] > arr[j + 1]) {

                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
              }
            }
          }


          space complexity of two loops 
          1. O(n^2)

          particulatr sorted array which algorithm is best for sorting
          1. insertion sort

          dijistra algo 
          if(T[w].know)
            continue;
          if(T[w].dist > T[v].dist + w(v, w))

          T[w].dist = T[v].dist + w(v, w);
          T[w].path = v;

          a steal job scheduling problem
          used data structure is 
          1. priority queue

          best  data structure for seraching a wors in dictionary
          1. trie

        What-is-lexicographically-the-smallest-string
          coding challange in hacker rank  
          characters swapping
          given string s repeats this operation zero or more times the lexicographically smallest string possible
          select two character in string , c1 and c2 
          replace all occurance of c1 with c2 and all occurance of c2 with c1

          s = "bbcacad"
         select c1 = b and c2 = a after swapping string will be "aacbcbd"
         select c1 = b and c2 = c after swapping string will be "aabcbcd"
         hence prove that lexico graphically smallest string is "aabcbcd"

            function swap(s, c1, c2) {
                let str = "";
                for(let i = 0; i < s.length; i++) {
                    if(s[i] == c1) {
                        str += c2;
                    } else if(s[i] == c2) {
                        str += c1;
                    } else {
                        str += s[i];
                    }
                }
                return str;
            }

            function lexicographicallySmallestString(s) {
                let min = s;
                for(let i = 0; i < s.length; i++) {
                    for(let j = i + 1; j < s.length; j++) {
                        let str = swap(s, s[i], s[j]);
                        if(str < min) {
                            min = str;
                        }
                    }
                }
                return min;
            }


            not valid answer 
            bdea
            our adeb is wrong answer
            correct answer is abde

            correect solution is 
            function swap(s, c1, c2) {
                let str = "";
                for(let i = 0; i < s.length; i++) {
                    if(s[i] == c1) {
                        str += c2;
                    } else if(s[i] == c2) {
                        str += c1;
                    } else {
                        str += s[i];
                    }
                }
                return str;
            }

            function lexicographicallySmallestString(s) {
                let min = s;
                for(let i = 0; i < s.length; i++) {
                    for(let j = i + 1; j < s.length; j++) {
                        let str = swap(s, s[i], s[j]);
                        if(str < min) {
                            min = str;
                        }
                    }
                }
                return min;
            }

            merging palindromes 
            hacker rank coding challange
            given two strings s1 and s2 that can be foremed with the letter of each string  . select one from each set that combined and rearranged produce longest palindrome if there are multiple palindromes of same length then select the one that hav smallest length

            s1 = "aab"
            s2 = "cca"
            output = "acaca"

            function mergingPalindromes(s1, s2) {
                let str = s1 + s2;
                let count = new Array(26).fill(0);
                for(let i = 0; i < str.length; i++) {
                    count[str.charCodeAt(i) - 97]++;
                }
                let odd = 0;
                let even = 0;
                for(let i = 0; i < 26; i++) {
                    if(count[i] % 2 == 0) {
                        even++;
                    } else {
                        odd++;
                    }
                }
                if(odd > 1) {
                    return -1;
                }
                let ans = "";
                let mid = "";
                for(let i = 0; i < 26; i++) {
                    if(count[i] % 2 == 0) {
                        let temp = "";
                        for(let j = 0; j < count[i] / 2; j++) {
                            temp += String.fromCharCode(i + 97);
                        }
                        ans = temp + ans + temp;
                    } else {
                        mid = String.fromCharCode(i + 97);
                        for(let j = 0; j < count[i]; j++) {
                            ans += mid;
                        }
                    }
                }
                return ans;
            }



  
          */
