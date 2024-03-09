/* eslint-disable @typescript-eslint/no-namespace */
namespace MyNameSpace {
  export const ab = 'ab';

  export class Pessoa {
    constructor(
      public nome: string,
      public sobrenome: string,
    ) {}
  }

  const pessoa = new Pessoa('Gabriel', 'Tomás');
  console.log(pessoa);

  export namespace OtherNameSpace {
    export const hello = 'Hello';
  }
}

const pessoa = new MyNameSpace.Pessoa('Gabriel2', 'Tomás2');
console.log(pessoa);
console.log(MyNameSpace.OtherNameSpace.hello);
