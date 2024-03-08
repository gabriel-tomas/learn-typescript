function decorator(
  target: Object,
  methodName: string | symbol,
  parameterIndex: number,
): any {
  console.log(target);
  console.log(methodName);
  console.log(parameterIndex);
}

export class Pessoa {
  public name: string;
  public surname: string;
  public age: number;

  constructor(name: string, surname: string, age: number) {
    this.name = name;
    this.surname = surname;
    this.age = age;
  }

  method(@decorator msg: string): string {
    return `${this.name} ${this.surname}: ${msg}`;
  }

  get completeName(): string {
    return `${this.name} ${this.surname}`;
  }

  set completName(value: string) {
    const words = value.split(/\s+/g);
    const firstName = words.shift();
    if (!firstName) return;
    this.name = firstName;
    this.surname = words.join(' ');
  }
}

const pessoa1 = new Pessoa('Gabriel', 'Tomas', 19);
const method = pessoa1.method('Olá, Mundo!');
console.log(method);
