type Veiculo = {
  marca: string;
  ano: number;
};

type Car = {
  brand: Veiculo['marca'];
  year: Veiculo['ano'];
  name: string;
};

export class Ford implements Car {
  brand = 'Ford' as const;
  constructor(
    public year: Car['year'],
    public name: Car['name'],
  ) {}
}
