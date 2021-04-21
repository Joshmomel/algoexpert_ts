// This is an input class. Do not edit.
export class LinkedList {
  value: number;
  next: LinkedList | null;

  constructor(value: number) {
    this.value = value;
    this.next = null;
  }
}

export function sumOfLinkedLists(linkedListOne: LinkedList, linkedListTwo: LinkedList) {
  const sum = String(LinkedListToNum(linkedListOne) + LinkedListToNum(linkedListTwo)).split('');

  let sumList = new LinkedList(Number(sum[sum.length - 1]));
  let p = sumList;

  if (sum.length < 2) return sumList;

  for (let i = sum.length - 2; i >= 0; i--) {
    p.next = new LinkedList(Number(sum[i]));
    p = p.next;
  }

  return sumList;
}

function LinkedListToNum(p: LinkedList) {
  let num = p.value;
  let i = 1;

  while (p.next != null) {
    num = num + p.next.value * 10 ** i;
    p = p.next;
    i++;
  }

  return num;
}

let a1 = new LinkedList(2);
let a2 = new LinkedList(4);
let a3 = new LinkedList(7);
let a4 = new LinkedList(1);

a1.next = a2;
a2.next = a3;
a3.next = a4;

let b1 = new LinkedList(9);
let b2 = new LinkedList(4);
let b3 = new LinkedList(5);

b1.next = b2;
b2.next = b3;

console.log(sumOfLinkedLists(a1, b1));
