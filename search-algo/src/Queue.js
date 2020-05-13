class _Node {
  constructor(value) {
      this.value = value;
      this.next = null;
  }
}

class Queue {
  constructor() {
      this.first = null;
      this.last = null;
  }

  enqueue(data) {
    const node = new _Node(data);

    if (this.first === null) {
        this.first = node;
    }

    if (this.last) {
        this.last.next = node;
    }
    //make the new node the last item on the queue
    this.last = node;
  }

  dequeue() {
    //if the queue is empty, there is nothing to return
  if (this.first === null) {
      return;
  }
  const node = this.first;
  this.first = this.first.next;
    //if this is the last item in the queue
  if (node === this.last) {
      this.last = null;
  }
  return node.value;
  }
}

function peek(queue) {
  if (queue.first === null) return;
  return queue.first.value;
}

function isEmpty(queue) {
  return queue.first === null;
}

function display(queue) {
  if (queue.first === null) return;
  let builder = '';
  let current = queue.first;
  builder += current.value;
  while (current.next !== null) {
    current = current.next;
    builder += ' -> ' + current.value;
  }
  builder += ' -> tail';
  console.log(builder);
  return;
}

function size(queue) {
  if (queue.first === null) return 0;
  let size = 0;
  let current = queue.first;
  while (current !== null) {
    current = current.next;
    size++;
  }
  return size;
}

module.exports = { Queue, peek, isEmpty, display, size };