export class CarrinhoDeCompras {
  private readonly _produtos: Produto[] = [];

  get produtos(): Produto[] {
    return this._produtos;
  }

  insertProducts(...products: Produto[]): void {
    this.produtos.push(...products);
  }

  quantityProducts(): number {
    return this.produtos.length;
  }

  totalValue(): number {
    return this.produtos.reduce((sum, product) => {
      return sum + product.preco;
    }, 0);
  }
}

class Produto {
  constructor(
    public readonly nome: string,
    public readonly preco: number,
  ) {}
}

const produto1 = new Produto('Calça', 20.43);
const produto2 = new Produto('Camiseta', 60.1);

const carrinhoDeCompras = new CarrinhoDeCompras();
carrinhoDeCompras.insertProducts(produto1, produto2);
console.log(carrinhoDeCompras.produtos);
console.log(carrinhoDeCompras.quantityProducts());
console.log(carrinhoDeCompras.totalValue());
