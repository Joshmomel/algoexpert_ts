// This is an input class. Do not edit.
export class LinkedList {
  value: number;
  next: LinkedList | null;

  constructor(value: number) {
    this.value = value;
    this.next = null;
  }
}

export function removeKthNodeFromEnd(head: LinkedList, k: number) {
  let p = head
  let index = 1

  while (p.next != null) {
    p = p.next
    index ++
  }

  p = head
  const removeIndex = (index - k - 1) % index

  for (let i = 0; i < removeIndex; i++) {
    if (p.next) p = p.next;
  }
  console.log(p.value);

  if (removeIndex < 0 && head.next) head.value = head.next?.value
  if (p.next) p.next = p.next?.next


  return head;
}


const l1 = new LinkedList(0);
const l2 = new LinkedList(1);
const l3 = new LinkedList(2);
const l4 = new LinkedList(3);
const l5 = new LinkedList(4);
const l6 = new LinkedList(5);
const l7 = new LinkedList(6);
const l8 = new LinkedList(7);
const l9 = new LinkedList(8);
const l10 = new LinkedList(9);



l1.next = l2;
l2.next = l3;
l3.next = l4;
l4.next = l5;
l5.next = l6;
l6.next = l7;
l7.next = l8;
l8.next = l9;
l9.next = l10;

removeKthNodeFromEnd(l1, 10)
