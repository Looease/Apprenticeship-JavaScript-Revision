class Node {
    // constructor creates a new node
    constructor(name){
        this.name = name;
        this.nextNode = null;
    }
};

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }
    add(name) {
        if (this.head === null) {
            let newNode = new Node(name);
            this.head = newNode;
            this.tail = newNode;
        } else {
            // create a new node
            let newerNode = new Node(name);
            // find last node 
            let lastNode = this.tail;
            // update last node's pointer
            lastNode.nextNode = newerNode;
            this.tail = newerNode;
        }
    }
    values(){
        const headNode = this.head.name;
        //while loop - needs to know when to stop 
        const node1 = this.head.nextNode.name;
        while(node1.nextNode != null){
            
        }
        const tailNode = this.tail.name;
        console.log(headNode, node1, tailNode);
    };
};

const myList = new LinkedList();
myList.add("fred");
myList.add("wilma");
myList.add("dave")
//myList.add("barney")
myList.values();