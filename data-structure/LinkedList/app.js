class LinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
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
myLinkedList.add('rrr')
console.log(myLinkedList)