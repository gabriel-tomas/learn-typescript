interface Pessoa {
  nome: string;
}

interface Pessoa {
  readonly sobrenome: string;
}

interface Pessoa {
  readonly enderecos: readonly string[];
}

interface Pessoa {
  readonly idade?: number;
}

const pessoa1: Pessoa = {
  nome: 'Gabriel',
  sobrenome: 'Tomás',
  enderecos: ['Rua 1'],
  idade: 31,
};

export default 0;
