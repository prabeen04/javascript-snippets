class LinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }
    addToHead(value) {
        const newNode = { value }; // 1
        newNode.next = this.head;  // 2
        this.head = newNode;       // 3
        this.length++;
        return this;
    }
    removeFromHead() {
        if (this.length === 0) {
            return undefined;
        }

        const value = this.head.value;
        this.head = this.head.next;
        this.length--;

        return value;
    }
    add(value) {
        const newNode = {
            data: value,
            next: null
        }
        if (this.head === null) {
            this.head = newNode;
            this.length++;
        } else {
            let currentNode = this.head;
            while (currentNode.next) {
                currentNode = currentNode.next
            }
            currentNode.next = newNode
            this.length++
        }
    }

    find(value) {
        let thisNode = this.head;
        while (thisNode) {
            if (thisNode.value === value) {
                return thisNode;
            }
            thisNode = thisNode.next
        }
        return
    }
}

const myLinkedList = new LinkedList();
myLinkedList.add('test')
myLinkedList.add('again')
myLinkedList.add('as')
myLinkedList.add('4')
myLinkedList.addToHead('rrr')
myLinkedList.removeFromHead()
myLinkedList.removeFromHead()
console.log(myLinkedList)