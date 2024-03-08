function decorator(target: any, propertName: string | symbol): any {
  let propertyValue: string;
  return {
    get: () => {
      return propertyValue;
    },
    set: (value: string) => {
      propertyValue = value;
    },
  };
}

export class Pessoa {
  @decorator
  public name: string;
  public surname: string;
  public age: number;

  constructor(name: string, surname: string, age: number) {
    this.name = name;
    this.surname = surname;
    this.age = age;
  }

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
