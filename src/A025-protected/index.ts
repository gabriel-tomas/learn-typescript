export class Empresa {
  public readonly nome: string;
  protected readonly colaboradores: Colaborador[] = [];
  private readonly cnpj: string;

  constructor(nome: string, cnpj: string) {
    this.nome = nome;
    this.cnpj = cnpj;
  }

  public adicionaColaborador(colaborador: Colaborador | Colaborador[]): void {
    if (Array.isArray(colaborador)) {
      this.colaboradores.push(...colaborador);
    } else {
      this.colaboradores.push(colaborador);
    }
  }

  public showColaboradores(): void {
    if (this.colaboradores.length > 0) {
      this.colaboradores.forEach((colaborador, index) => {
        console.log(index + 1 + '-' + colaborador.nome);
      });
    } else {
      console.log('Não há colaboradores cadastrados');
    }
  }
}

export class Udemy extends Empresa {
  constructor() {
    super('Udemy', '11.111.111/11');
  }

  popColaborador(): Colaborador | null {
    const colaboradorRemoved = this.colaboradores.pop();
    if (!colaboradorRemoved) {
      console.warn('Array<Colaborador> is empty');
      return null;
    }
    return colaboradorRemoved;
  }
}

export class Colaborador {
  constructor(
    public readonly nome: string,
    public readonly sobrenome: string,
  ) {}
}

const empresa1 = new Udemy();
const colaborador1 = new Colaborador('Gabriel', 'Tomás');
const colaborador2 = new Colaborador('Maria', 'Silva');
const colaborador3 = new Colaborador('João', 'Miranda');
empresa1.adicionaColaborador([colaborador1, colaborador2, colaborador3]);
empresa1.popColaborador();
console.log(empresa1);
/* empresa1.showColaboradores(); */
