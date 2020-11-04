class LinkedListNode {
    constructor(
        private value: any,
        private next: LinkedListNode | null = null
    ) {} 

    public getData(): any {
        return this.value
    }

    public getNext(): LinkedListNode | null {
        return this.next
    }

    public setValue(value: any): void {
        this.value = value
    }

    public setNext(next: LinkedListNode | null) {
        this.next = next
    }
}

// const list = new LinkedListNode("new")

// console.log(list)


export class LinkedList {
    constructor(public start: LinkedListNode | null = null) {}

    public appendToTail(value: number) {
        if (!this.start) {
        this.start = new LinkedListNode(value);
        } else {
        let node: LinkedListNode = this.start;
        while (node && node.getNext() !== null) {
            node = node.getNext()!;
        }
        node.setNext(new LinkedListNode(value));
        }
    }

    public print(): void {
        let node: LinkedListNode | null = this.start;
        let i = 1;
        while (node !== null) {
            console.log(`Elemento ${i}: `, node!.getData());
            node = node!.getNext();
            i++;
        }
    }
}

export class Stack {
    public nodes: (number | undefined)[] = [];

    isEmpty(): boolean {
        return this.nodes.length > 0;
    }

    push(value: number): void {
        this.nodes.push(value);
    }

    pop(): any {
        const nodeToPop = this.nodes[this.nodes.length - 1];
        this.nodes[this.nodes.length - 1] = undefined;
        this.nodes.length -= 1;
        return nodeToPop;
    }

    print(): void {
        for (let i = 0; i < this.nodes.length; i++) {
        console.log(`Elemento ${i + 1}: `, this.nodes[i]);
        }
    }
}
const linkedlist = new LinkedListNode("new")
const list = new LinkedList()
const newStack = new Stack()


export class Queue {
    public nodes: LinkedList = new LinkedList();

    isEmpty(): boolean {
        return this.nodes.start === undefined;
    }

    enqueue(value: number): void {
        this.nodes.appendToTail(value);
    }

    dequeue(): any {
        if (this.nodes.start) {
            const nodeToDequeue = this.nodes.start;
            this.nodes.start = this.nodes.start.getNext();
            return nodeToDequeue
        }
    }

    print(): void {
        this.nodes.print();
    }
}