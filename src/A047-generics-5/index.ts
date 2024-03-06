export class Pessoa<T, U> {
  constructor(
    public nome: T,
    public idade: U,
  ) {}
}

export class Stack<T> {
  private counter = 0;
  private elements: { [key: number]: T } = {};

  push(element: T): void {
    this.elements[this.counter] = element;
    this.counter++;
  }

  pop(): T | undefined {
    if (this.checkEmptyStack()) {
      console.log('Stack está vazia');
      return;
    }
    const elementDeleted = this.elements[this.counter - 1];
    delete this.elements[this.counter - 1];
    this.counter--;
    return elementDeleted;
  }

  checkEmptyStack(): boolean {
    return this.counter === 0;
  }
}

const stack1 = new Stack<number>();
stack1.push(1);
stack1.push(2);
stack1.push(3);
stack1.push(4);
