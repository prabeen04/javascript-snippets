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

    remove() {

    }
}

const myLinkedList = new LinkedList();
myLinkedList.add('test')
myLinkedList.add('again')
myLinkedList.add('as')
myLinkedList.add('4')
myLinkedList.addToHead('rrr')
console.log(myLinkedList)