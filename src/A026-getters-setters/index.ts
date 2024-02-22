export class Pessoa {
  constructor(
    private _nome: string,
    private sobrenome: string,
    private numero: string,
    private _cpf: string,
  ) {}

  get nome(): string {
    return this._nome;
  }

  get cpf(): string {
    return this._cpf.replaceAll(/\D/gi, '');
  }

  set cpf(valor: string) {
    this._cpf = valor;
  }
}

const pessoa1 = new Pessoa(
  'Antônio',
  'Silva',
  '+00 00 0000-0000',
  '000.000.000-00',
);

console.log(pessoa1.nome);
console.log(pessoa1.cpf);
pessoa1.cpf = '123.456.789-00';
console.log(pessoa1.cpf);
