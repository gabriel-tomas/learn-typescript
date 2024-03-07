const obj1: Record<string, string | number> = {
  nome: 'Gabriel',
  sobrenome: 'Tomás',
  idade: 19,
};

type PessoaProtocol = {
  nome?: string;
  sobrenome?: string;
  idade?: number;
};

// Required
type PessoaProtocolRequired = Required<PessoaProtocol>;
// Partial
type PessoaProtocolPartial = Partial<PessoaProtocolRequired>;
// Readonly
type PessoaProtocolReadonly = Readonly<PessoaProtocolRequired>;
// Pick
type PessoaProtocolPick = Pick<PessoaProtocolRequired, 'nome' | 'sobrenome'>;

const obj2: PessoaProtocolPick = {
  nome: 'Gabriel',
  sobrenome: 'Tomás',
};

// Extract e Exclude
type T = 'A' | 'B' | 'C';
type U = 'C' | 'D' | 'E';
type TypeExclude = Exclude<T, U>;
type TypeExtract = Extract<T, U>;

type AccountMongo = {
  _id: string;
  name: string;
  email: string;
};

type AccountApi = { id: string } & Pick<
  AccountMongo,
  Exclude<keyof AccountMongo, '_id'>
>;

const accountMongo: AccountMongo = {
  _id: 'sgiopjfsdopkgopdfkopgkdfaopgkopfdopgkfdopk',
  name: 'Gabriel',
  email: 'gabriel@gmail.com',
};

function mapAccount(accountMongo: AccountMongo): AccountApi {
  const { _id, ...accountData } = accountMongo;
  return { ...accountData, id: _id };
}

const accountApi = mapAccount(accountMongo);
console.log(accountApi);

export default null;
