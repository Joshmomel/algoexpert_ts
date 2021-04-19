export class LinkedList {
  value: number;
  next: LinkedList | null;

  constructor(value: number) {
    this.value = value;
    this.next = null;
  }
}

export function removeDuplicatesFromLinkedList(linkedList: LinkedList) {
  const list: Array<number> = [linkedList.value];
  let pointer = linkedList

  while (pointer.next) {
    const v = pointer.next.value;

    if (!list.includes(v)) {
      list.push(v)
      pointer = pointer.next
      continue
    }

    pointer.next = pointer.next.next

  }

  return linkedList;
}

const l1 = new LinkedList(1);
const l2 = new LinkedList(1);
const l3 = new LinkedList(1);
const l4 = new LinkedList(1);
const l5 = new LinkedList(5);
const l6 = new LinkedList(6);
const l7 = new LinkedList(7);

l1.next = l2;
l2.next = l3;
l3.next = l4;
l4.next = l5;
l5.next = l6;
l6.next = l7;

const l = removeDuplicatesFromLinkedList(l1);
console.log(l.next);
