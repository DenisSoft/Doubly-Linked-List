const Node = require('./node');

class LinkedList {
    constructor() {
        this.length = 0;
        this._head = null;
        this._tail = null;
    }

    append(data) {
        var node = new Node(data);

        if (this.length) {
            this._tail.next = node;
            node.prev = this._tail;
            this._tail = node;
        } else {
            this._head = node;
            this._tail = node;
        }

        this.length++;

        return node;
    }

    head() {
        if (this.length > 0) {
            return this._head;
        } else {
            return null;
        }
    }

    tail() {
        if (this.length > 0) {
            return this._tail;
        } else {
            return null;
        }
    }

    at(index) {
        var currentNode = this._head,
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
        if (index < this.length) {
            var node = {
                data: data,
                next: null,
                prev: null,
            }

            var nodeCur = this.at(index);
            var nodePrev = nodeCur.prev;

            node.prev = nodePrev;
            node.next = nodeCur;
            nodePrev.next = node;
            nodeCur.prev = node;

            this.length++;

            return this;
        } else {
            throw new Error("The index of the item that you have selected more than the length of the list.");
        }
    }

    isEmpty() {
        return this.length == 0 ? true : false;
    }

    clear() {
        this.length = 0;
        this._head = null;
        this._tail = null;
    }

    deleteAt(index) {
        if (index < this.length) {

            let node = this.at(index);
            node.prev.next = node.next;
            node.next.prev = node.prev;

            this.length--;
            return this;
        } else {
            return null;
        }
    }

    reverse() {
        var nodePrev = this._tail.prev;
        var current = this._tail;
        this._tail = this._head;
        this._head = current;
        for (var i = this.length-1; i > 0; i--) {
            var node = current;
            var prev = node.next;
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
        var node = this._head;
        var i = 0;
        while (i != this.length) {
            if (node.data == data) {
                return i;
            }
            node = node.next;
            i++;
        }
        return -1;
    }
}

module.exports = LinkedList;
