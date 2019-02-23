class LinkedList {
    constructor() {
        this.data = null;
        this.length = 0;
    }
    add(value) {
        const newNode = {
            value: value,
            next: null
        }
        this.data = newNode;
        this.length++;
    }

    remove() {

    }
}

const myLinkedList = new LinkedList();
myLinkedList.add('test')
console.log(myLinkedList)