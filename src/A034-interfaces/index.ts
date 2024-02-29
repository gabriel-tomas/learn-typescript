interface TipoPessoa {
  nome: string;
  sobrenome: string;
}

interface TipoInfoPessoa {
  nomeCompleto(): string;
}

type TipoPessoaAll = TipoPessoa & TipoInfoPessoa;
interface TipoPessoaAll2 extends TipoPessoa, TipoInfoPessoa {}

export class Pessoa implements TipoPessoaAll2 {
  constructor(
    public nome: string,
    public sobrenome: string,
  ) {}

  nomeCompleto(): string {
    return `${this.nome} ${this.sobrenome}`;
  }
}

const pessoa1 = new Pessoa('Gabriel', 'Tomás');
pessoa1.nomeCompleto();
