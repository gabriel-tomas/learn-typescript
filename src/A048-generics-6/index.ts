type PessoaNames = {
  name: string;
  surname: string;
};

type PessoaAdditionalInfos = {
  age: number;
  weight: number;
  isAdult?: boolean;
};

export function joinObjects<O1, O2>(obj1: O1, obj2: O2): O1 & O2 {
  return Object.assign({}, obj1, obj2);
}

const pessoaNames: PessoaNames = {
  name: 'Gabriel',
  surname: 'Tomás',
};

const pessoaAdditionalInfos: PessoaAdditionalInfos = {
  age: 19,
  weight: 70,
};

const objectsJoined = joinObjects(pessoaNames, pessoaAdditionalInfos);
console.log(objectsJoined);
