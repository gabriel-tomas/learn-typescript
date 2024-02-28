type CanHaveFerramenta = Ferramenta | null;

export class Escritor {
  constructor(
    private readonly _nome: string,
    private _ferramenta: CanHaveFerramenta,
  ) {}

  get nome(): string {
    return this._nome;
  }

  get ferramenta(): CanHaveFerramenta {
    if (!this._ferramenta) {
      console.log('Não tem nenhuma ferramenta');
    }
    return this._ferramenta;
  }

  set ferramenta(newFerramenta: CanHaveFerramenta) {
    this._ferramenta = newFerramenta;
  }

  escrever(): void {
    if (!this._ferramenta) {
      console.log('Não posso escrever sem ferramenta');
      return;
    }
    console.log(`${this._nome} está escrevendo`);
    this._ferramenta.escrever();
  }
}

abstract class Ferramenta {
  constructor(protected _nome: string) {}

  get nome(): string {
    return this._nome;
  }

  abstract escrever(): void;
}

class Caneta extends Ferramenta {
  escrever() {
    console.log(`Usando ${this._nome}`);
  }
}

const canetaAzul = new Caneta('Caneta azul');
const escritor1 = new Escritor('Manoel', null);
escritor1.ferramenta = canetaAzul;
console.log(escritor1.ferramenta);
escritor1.escrever();
