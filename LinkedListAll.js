// Node class
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

// LinkedList class
class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    // Insert at the end
    insertAtEnd(value) {
        const newNode = new Node(value);

        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }

    //insert at start
    insertAtStart(value) {
        const newNode = new Node(value);

        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
    }

    //insert method
    insert(index, value) {
        const newNode = new Node(value);

        if (index === 0) {
            this.insertAtStart(value);
            return;
        } else if (index === this.size()) {
            this.insertAtEnd(value);
            return;
        } else if (index < 0 || index > this.size()) {
            console.log("Invalid index");
            return;
        } else {
            let current = this.head;
            let previous = null;
            let count = 0;

            // Traverse to the position just before the target index
            while (count < index) {
                previous = current;
                current = current.next;
                count++;
            }

            // Insert node
            previous.next = newNode;
            newNode.next = current;
        }
    }

    //delete node

    delete(index) {
        if (this.head === null) {
            console.log("List is empty");
            return;
        }

        // Check for invalid index
        if (index < 0 || index > this.size()) {
            console.log("Invalid index");
            return;
        }

        // Deleting the head
        if (index === 0) {
            this.head = this.head.next;

            // If list is now empty, update tail
            if (this.head === null) {
                this.tail = null;
            }
            return;
        }

        let current = this.head;
        let previous = null;
        let count = 0;

        while (count < index) {
            previous = current;
            current = current.next;
            count++;
        }

        // Remove node
        previous.next = current.next;

        // If deleted node was tail
        if (current === this.tail) {
            this.tail = previous;
        }
    }

    //get elemnt
    get(index) {
        if (index < 0 || index >= this.size()) {
            console.log("Invalid index");
            return null;
        }

        let current = this.head;
        let count = 0;

        while (count < index) {
            current = current.next;
            count++;
        }

        return current.value;
    }

    //remove at end
    remove(value) {
    }

    // Display the list
    display() {
        let current = this.head;
        while (current !== null) {
            console.log(current.value);
            current = current.next;
        }
    }

    //Size of list
    size() {
        let current = this.head;
        let length = 0;
        while (current !== null) {
            length++;
            current = current.next;
        }
        return length;
    }

}

const list = new LinkedList();

list.insertAtEnd(10);
list.insertAtEnd(20);
list.insertAtEnd(30);
list.insertAtEnd(40);
list.insertAtEnd(50);
list.insertAtStart(5)

list.insert(5, 60)
list.delete(4)
list.display();
console.log("element:", list.get(3))
let size = list.size()

console.log("head:", list.head.value, "tail:", list.tail.value, "size:", size)

