// Feel free to add new properties and methods to the class.

/**
 *       5 7 2
 *  min  5 5 2
 *  max  5 7 7
 *  peak 5 7 2
 */
export class MinMaxStack {
  stack: number[];
  minMax: [{ min: number; max: number }];

  constructor() {
    this.stack = [];
    this.minMax = [{ min: Number.MAX_VALUE, max: Number.MIN_VALUE }];
  }

  peek() {
    const length = this.stack.length;
    return this.stack[length - 1];
  }

  pop() {
    const v = this.stack.pop();
    this.minMax.pop();

    return v;
  }

  push(number: number) {
    this.stack.push(number);

    let newMin = this.minMax[this.minMax.length - 1].min;
    let newMax = this.minMax[this.minMax.length - 1].max;

    if (number > newMax) newMax = number;
    if (number < newMin) newMin = number;

    this.minMax.push({ min: newMin, max: newMax });
  }

  getMin() {
    const length = this.stack.length;
    return this.minMax[length].min;
  }

  getMax() {
    const length = this.stack.length;
    return this.minMax[length].max;
  }
}

const stack = new MinMaxStack();
stack.push(5);
stack.push(7);
stack.push(2);

console.log(stack);
