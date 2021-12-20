
class Node {
    constructor(val) {
      this.val = val;
      this.next = null
    }
}


// Creating a singly linked list and then a push method. 

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null; 
    this.length = 0
  }

  push(val) {
    const newNode = new Node(val)
    if(!this.head) {
      this.head = newNode;
      this.tail = this.head
    } else {
      this.tail.next = newNode;
      this.tail = newNode
    }
    this.length++
    return this
  }
    
    // A method to traverse through the list and print the output
    
     traverse() {
        let current = this.head;
        while(current) {
            console.log(current.val)
            current = current.next
        }
    }
}

const list = new SinglyLinkedList()
list.push(1)
list.push(2)
list.push(3)
console.log(list)
