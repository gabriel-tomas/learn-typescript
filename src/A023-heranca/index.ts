export class Pessoa {
  constructor(
    public readonly nome: string,
    public readonly sobrenome: string,
    private readonly numero: string,
    protected readonly cpf: string,
  ) {}

  public getNumero(): string {
    return this.numero;
  }

  public getCpf(): string {
    return this.cpf;
  }

  public getNomeCompleto(): string {
    return `${this.nome} ${this.sobrenome}`;
  }
}

export class Aluno extends Pessoa {
  public getNomeCompleto(): string {
    return `Nome completo do aluno: ${this.nome} ${this.sobrenome}`;
  }
}

export class Cliente extends Pessoa {
  public getNomeCompleto(): string {
    return `Nome completo do cliente: ${this.nome} ${this.sobrenome}`;
  }
}

const aluno1 = new Aluno(
  'Antônio',
  'Silva',
  '+00 00 0000-0000',
  '000.000.000-00',
);

const cliente1 = new Cliente(
  'Antônio',
  'Silva',
  '+00 00 0000-0000',
  '000.000.000-00',
);

console.log(aluno1.getNomeCompleto());
console.log(cliente1.getNomeCompleto());
