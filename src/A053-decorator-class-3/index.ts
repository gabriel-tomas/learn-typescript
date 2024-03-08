function decoratorPessoa(param1: string, param2: string) {
  return function <T extends new (...args: any[]) => any>(target: T) {
    return class extends target {
      private _completeName: string;
      constructor(...args: any[]) {
        super(...args);
        this._completeName = `${this.name} ${this.surname}`;
      }

      getNomeCompleto(): string {
        return this._completeName + ' ' + param1 + ' ' + param2;
      }
    };
  };
}

@decoratorPessoa('valor1', 'valor2')
export class Pessoa {
  constructor(
    protected name: string,
    protected surname: string,
  ) {}
}

const pessoa1 = new Pessoa('Gabriel', 'Tomas');
console.log(pessoa1);
