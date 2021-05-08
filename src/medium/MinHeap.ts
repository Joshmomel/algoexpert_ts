// Do not edit the class below except for the buildHeap,
// siftDown, siftUp, peek, remove, and insert methods.
// Feel free to add new properties and methods to the class.

export class MinHeap {
  heap: number[];

  constructor(array: number[]) {
    this.heap = this.buildHeap(array);
  }

  buildHeap(array: number[]) {
    let currentIndex = array.length - 1;
    while (currentIndex >= -1) {
      let parentIndex = MinHeap.getParentIndex(currentIndex);
      if (parentIndex < 0) return array;
      this.shitDown(parentIndex, array);

      currentIndex -= 2;
    }

    return array;
  }


  peek() {
    return this.heap[0];
  }

  shiftUp(newValueIndex: number, array: number[]) {
    while (newValueIndex !== 0) {
      const parentIndex = MinHeap.getParentIndex(newValueIndex);
      if (array[parentIndex] < array[newValueIndex]) break;
      MinHeap.swap(newValueIndex, parentIndex, array);
      newValueIndex = parentIndex;
    }
  }

  shitDown(shiftIndex: number, array: number[]) {
    while (shiftIndex < array.length - 1) {
      const [firstChild, secondChild] = MinHeap.getChildrenIndex(shiftIndex);
      if (firstChild >= array.length) break;
      const shitTo = MinHeap.siftDown_helper(shiftIndex, firstChild, secondChild, array);
      if (shitTo < 0) break;
      shiftIndex = shitTo;
    }
  }

  private static siftDown_helper(shiftIndex: number, firstChild: number, secondChild: number, array: number[]) {
    let childToShift =
      array[secondChild] && array[secondChild] < array[firstChild] ? secondChild : firstChild;

    if (array[shiftIndex] < array[childToShift]) return -1;

    MinHeap.swap(shiftIndex, childToShift, array);
    return childToShift;
  }

  remove() {
    // Write your code here.
    // 1. swap parent node with the last index in the heap
    // 2. shitDown the parent node until its value smaller then both children or not child
    MinHeap.swap(0, this.heap.length - 1, this.heap);
    const removeValue = this.heap.pop();
    this.shitDown(0, this.heap);
    return removeValue
  }

  insert(value: number) {
    // Write your code here.
    // 1. add to the back of array
    // 2. shift up until its value larger the parent node or no parent node
    this.heap.push(value);
    this.shiftUp(this.heap.length - 1, this.heap);
  }

  private static swap(i: number, j: number, array: number[]) {
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  private static getChildrenIndex(index: number) {
    const firstChildIndex = 2 * index + 1;
    const secondChildIndex = 2 * index + 2;

    return [firstChildIndex, secondChildIndex];
  }

  private static getParentIndex(index: number) {
    return Math.floor((index - 1) / 2);
  }
}

const minHeap = new MinHeap([-7, 2, 3, 8, -10, 4, -6, -10, -2, -7, 10, 5, 2, 9, -9, -5, 3, 8]);

minHeap.remove();
console.log(minHeap.peek())
minHeap.insert(-8)

console.log(minHeap);
