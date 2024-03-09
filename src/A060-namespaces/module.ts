/* eslint-disable @typescript-eslint/no-namespace */
namespace MyNameSpace {
  export const ab = 'ab';

  export class Pessoa {
    constructor(
      public nome: string,
      public sobrenome: string,
    ) {}
  }

  export const pessoa = new Pessoa('Gabriel', 'Tomás');

  export namespace OtherNameSpace {
    export const hello = 'Hello';
  }
}

const pessoa2 = new MyNameSpace.Pessoa('Gabriel2', 'Tomás2');
