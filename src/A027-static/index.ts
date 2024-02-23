export class Pessoa {
  protected static defaultNumber = '+00 00 00000-0000';
  protected static defaultCpf = '000.000.000-00';

  constructor(
    public _nome: string,
    public sobrenome: string,
    public numero: string,
    public _cpf: string,
  ) {}

  static createPerson(
    nome: string,
    sobrenome: string,
    numero: string = Pessoa.defaultNumber,
    cpf: string = Pessoa.defaultCpf,
  ): Pessoa {
    return new Pessoa(nome, sobrenome, numero, cpf);
  }
}

/* const pessoa1 = new Pessoa(
  'Antônio',
  'Silva',
  '+00 00 0000-0000',
  '000.000.000-00',
); */

console.log(Pessoa.createPerson('Antônio', 'Silva'));
