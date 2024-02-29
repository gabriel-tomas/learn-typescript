type TipoPessoa = {
  nome: string;
  sobrenome: string;
};

type TipoInfoPessoa = {
  nomeCompleto(): void;
};

class Pessoa implements TipoPessoa, TipoInfoPessoa {
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
