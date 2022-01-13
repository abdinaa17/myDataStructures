
// Implementing a stack using a Singly Linked List

// Stacks are LIFO(Last In First Out)

class Node{
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}


class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    // To avoid iterating througout the list,
    // we will push and pop at the beginning. 
    // We basically do shift and unshift but call them pop and push respectively.

    push(val) {
        let newNode = new Node(val)
        if(this.length === 0) {
            this.first = newNode;
            this.last = newNode;
        } else {
            newNode.next = this.first
            this.first = newNode
        }

        return ++this.length;
    }

    pop() {
        if(this.length === 0) return undefined
        let removedNode = this.first
        this.first = removedNode.next
        this.length--
         if(this.length === 0) {
            this.last = newNode;
        }
        return removedNode
    }
}

//const stack = new Stack() 
// stack.push(1)
// stack.push(2)
// stack.push(3)
// stack.push(4)

//console.log(stack);
