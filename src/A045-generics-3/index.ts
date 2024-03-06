interface PessoaProtocol<T = string, U = number> {
  nome: T;
  sobrenome: T;
  idade: U;
}

type PessoaProtocol2<T, U> = {
  nome: T;
  sobrenome: T;
  idade: U;
};

const aluno: PessoaProtocol2<string, number> = {
  nome: 'Gabriel',
  sobrenome: 'Tomás',
  idade: 19,
};
