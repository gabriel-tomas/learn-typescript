export function add(a: unknown, b: unknown): number | string {
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b;
  }
  return `${a}${b}`;
}

/* console.log(add('a', 2));
console.log(add(2, 2)); */

interface Pessoa {
  tipo: 'pessoa';
  nome: string;
}
interface Animal {
  tipo: 'animal';
  cor: string;
}

type PessoaOuAnimal = Pessoa | Animal;

export class Aluno implements Pessoa {
  tipo = 'pessoa' as const;
  constructor(public nome: string) {}
}

function mostraNome(obj: PessoaOuAnimal): void {
  if (obj instanceof Aluno) console.log(obj.nome);
}

mostraNome(new Aluno('João'));
mostraNome({ tipo: 'animal', cor: 'branco' });
