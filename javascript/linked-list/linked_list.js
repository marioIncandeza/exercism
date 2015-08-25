var Deque = function() {
    this.head = new Deque.Node();
    this.tail = new Deque.Node();
    this.head.next = this.tail;
    this.tail.prev = this.head;
}

Deque.Node = function(data) {
    this.data = data;
    this.prev = null;
    this.next = null;
};

Deque.prototype.empty = function() {
    return this.head.next === this.tail;
};

Deque.prototype.push = function(data) {
    var node = new Deque.Node(data);
    node.prev = this.tail.prev;
    node.prev.next = node;
    node.next = this.tail;
    this.tail.prev = node;
};

Deque.prototype.pop = function() {
    if (this.empty()) {
        return undefined;
    } else {
        var node = this.tail.prev;
        this.tail.prev = node.prev;
        node.prev.next = this.tail;
        return node.data;
    }
};

Deque.prototype.unshift = function(data) {
    var node = new Deque.Node(data);
    node.next = this.head.next;
    node.next.prev = node;
    node.prev = this.head;
    this.head.next = node;
};

Deque.prototype.shift = function() {
    if (this.empty()) {
        return undefined;
    } else {
        var node = this.head.next;
        this.head.next = node.next;
        node.next.prev = this.head;
        return node.data;
    }
};

Deque.prototype.count = function() {
    var count = -1;
    for (var n = this.head; n.next != null; n = n.next) {
        count++;
    }
    return count;
};

Deque.prototype.delete = function(data){
    for (var n = this.head; n.next != null; n = n.next){
        if (n.data === data){
            n.prev.next = n.next;
            n.next.prev = n.prev;
        }
    }
}

module.exports = Deque;