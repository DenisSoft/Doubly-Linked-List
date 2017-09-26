const Node = require('./node');

class LinkedList {
    constructor() {
        this.length = 0;
        this._head = null;
        this._tail = null;
    }

    append(data) {
        const node = new Node(data);

        if (this.length) {
            this._tail.next = node;
            node.prev = this._tail;
            this._tail = node;
        } else {
            this._head = node;
            this._tail = node;
        }

        this.length++;

        return this;
    }

    head() {
        if (this.length > 0) {
            return this._head.data;
        } else {
            return null;
        }
    }

    tail() {
        if (this.length > 0) {
            return this._tail.data;
        } else {
            return null;
        }
    }

    at(index) {
        return this.nodeAt(index).data;
    }

    nodeAt(index) {
        let currentNode = this._head,
            length = this.length,
            count = 0;

        if (length === 0 || index < 0 || index > length) {
            return null;
        }

        while (count < index) {
            currentNode = currentNode.next;
            count++;
        }

        return currentNode;
    }

    insertAt(index, data) {
        if (index <= this.length) {
            let node = {
                data: data,
                next: null,
                prev: null,
            };

            let nodeCur = this.nodeAt(index);
            let nodePrev = nodeCur.prev;

            node.prev = nodePrev;
            node.next = nodeCur;
            nodePrev.next = node;
            nodeCur.prev = node;

            this.length++;

            return this;
        } else {
            return null;
        }
    }

    isEmpty() {
        return this.length === 0;
    }

    clear() {
        this.length = 0;
        this._head = null;
        this._tail = null;
    }

    deleteAt(index) {
        // if (index < this.length) {
        //
        //     let node = this.nodeAt(index);
        //
        //     if (node.next === null) {
        //         node.prev.next = null;
        //     } else {
        //         node.prev.next = node.next;
        //     }
        //
        //     if (node.prev === null) {
        //         node.next.prev = null;
        //     } else {
        //         node.next.prev = node.prev;
        //     }
        //
        //     this.length--;
        //     return this;
        // } else {
        //     return null;
        // }
    }

    reverse() {
        let nodePrev = this._tail.prev;
        let current = this._tail;
        this._tail = this._head;
        this._head = current;
        for (let i = this.length-1; i > 0; i--) {
            const node = current;
            const prev = node.next;
            node.next = node.prev;
            node.prev = prev;
            current = nodePrev;
            nodePrev = current.prev;
        }
        this._tail.prev = this._tail.next;
        this._tail.next = null;
        return this;
    }

    indexOf(data) {
        let node = this._head;
        let i = 0;
        while (node !== null) {
            if (node.data === data) {
                return i;
            }
            node = node.next;
            i++;
        }
        return -1;
    }
}

module.exports = LinkedList;
