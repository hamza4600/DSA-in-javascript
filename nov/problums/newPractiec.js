// creat a Binar Teree
class TNode {
    constructor(value) {
        this.value = value;
        this.right = null;
        this.left = null
    }
}

class Tree {
    constructor() {
        this.head = null
    }
    add(data) {
        let newNode = new TNode(data);
        if (!this.head) {
            this.head = newNode;
        } else {
            this.insert(this.head, newNode) // transver and insert at right postion
        }
    }
    insert(node, newNode) {
        if (node.value < newNode.value) {
            if (node.left === null) {
                node.left = newNode
            } else {
                this.insert(node.left, newNode)
            }
        } else {
            if (node.right === null) {
                node.right = newNode
            } else {
                this.insert(node.right, newNode)
            }
        }
    }
    search(data) {
        let current = this.head;
        while (current.value !== data) {
            if (current.value < data) {
                current = current.right
            } else if (current.value > data) {
                current = current.left;
            }
            if (current === null) {
                return null;
            }
        }
        return current;
    }
}


class Graphs {
    constructor() {
        this.MapList = {};
    }
    addVertex(node) {
        this.MapList[node] = [];

    }
    addEdge(node1, node2) {
        if (this.MapList[node1] || this.MapList[node2]) {
            this.MapList[node1].push(node2);
            this.MapList[node2].push(node1);
        }
    }



}

const gra = new Graphs();

gra.addVertex("0");
gra.addVertex("1");
gra.addVertex("2");
gra.addVertex("3");

gra.addEdge("0", "1");
gra.addEdge("0", "2");
gra.addEdge("1", "2");
gra.addEdge("1", "3");

console.log(gra)


// link List 
class LNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkList {
    constructor() {
        this.head = null
    }
    add(data) {
        let newNode = new LNode(data);
        if (!this.head) {
            this.head = newNode
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next
            }
            current.next = newNode
        }
    }
    search(data) {
        let current = this.head;
        while (current) {
            if (data === current.data) {
                return data;
            }
            current = current.next
        }
        return null;
    }
    insert(data, postion) {
        let newNode = new LNode(data);
        let current = this.head;
        let i = 0;
        let previous;
        if (postion === 0) {
            newNode.next = current;
            this.head = newNode;

        } else {
            while (i < postion) {
                previous = current;
                current = current.next
                i++
            }
            newNode.next = current;
            previous.next = newNode
        }
    }
}

// Sorting ALgorithsm

const aaar = [1, 2, 3, 9, 7, 5, 3, 1, 25, 45, 4, 12, 65, 100, 2, 65, 6, 5, 6, 2];

function BubbleSort(array) {
    let flag = false;
    for (var i = 0; i <= array.length - 1; i++) {
        flag = false;
        for (var j = 0; j < (array.length - i - 1); j++) {
            if (array[j] > array[j + 1]) {
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
                flag = true
            }
        }
        if (!flag) {
            return array
        }
    }
    return array
}

// console.log(BubbleSort(aaar))


function InsertionSort(array) {
    let len = array.length;
    let tem, i, j;
    for (i = 0; i < len; i++) {
        j = i;
        tem = array[i]
        while (j > 0 && arr[j - 1] > tem) {
            arr[j] = arr[j - 1];
            j--
        }
        arr[j] = tem;
    }
    return array
}

function SelectionSort(arr) {
    let len = arr.length;
    let min;
    for (var i = 0; i < len; i++) {
        min  = i
        for(var j =i+1; j<len; j++ ) {
            if(arr[min] > arr[j]) {
                min = j
            }
        }
        if(i !== min) {
            let temp = arr[i];
            arr[i ] = arr[min];
            arr[min] = temp
        }
    }
    return arr
}


// 
function QuickSort(array) {
    if(array.length === 0) {
        return [];
    }

    let left = [];
    let right = [];
    let piviot = arr[0];

    for(var i = 0; i<array.length; i++) {
        if(ar[i] < piviot) {
            left.push(array[i])
        } else {
            right.push(array[i])
        }
    }
    return QuickSort(left).concat(piviot , QuickSort(right))
}

function Min (arr) {
    let min = arr[0];
    let max = arr[0];
    let repeted ;
    for(var i =0 ; i<arr.length; i++) {
        if(arr[i] > max) {
            max = arr[i]
        } else if (arr[i] < min){
            min = arr[i]
        }

        if(arr[i] === arr[arr.length - i]) {
            repeted = arr[i]
        }
    }
    console.log(min, max , repeted )
}
Min(aaar)