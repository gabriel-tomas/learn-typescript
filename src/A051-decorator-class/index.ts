@decoratorPessoa
export class Pessoa {
  constructor(
    protected name: string,
    protected surname: string,
  ) {}
}

function decoratorPessoa<T extends new (...args: any[]) => any>(target: T) {
  return class extends target {
    private _completeName: string;
    constructor(...args: any[]) {
      super(...args);
      this._completeName = `${this.name} ${this.surname}`;
    }

    getNomeCompleto(): string {
      return this._completeName;
    }
  };
}

/* const pessoa1 = new PessoaDecorated('Gabriel', 'Tomás'); */
const pessoa2 = new Pessoa('Gabriel', 'Tomas');

/* console.log(pessoa1); */
console.log(pessoa2);
