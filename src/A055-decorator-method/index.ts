function methodDecorator1(
  target: any,
  methodName: string,
  descriptor: PropertyDescriptor,
): PropertyDescriptor | void {
  console.log(target, methodName, descriptor);
  return {
    writable: false,
    enumerable: false,
    configurable: false,
    value: (msg: string): string => {
      return `MENSAGEM: ${msg}`;
    },
  };
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

  @methodDecorator1
  method(msg: string): string {
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
