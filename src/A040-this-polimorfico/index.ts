export class Calculadora {
  constructor(protected _number: number) {}

  get number(): number {
    return this._number;
  }

  add(n: number): this {
    this._number += n;
    return this;
  }

  sub(n: number): this {
    this._number -= n;
    return this;
  }

  mult(n: number): this {
    this._number *= n;
    return this;
  }

  div(n: number): this {
    this._number /= n;
    return this;
  }
}

export class SubCalculadora extends Calculadora {
  pow(n: number): this {
    this._number **= n;
    return this;
  }
}

/* const calculadora = new Calculadora(1);
console.log(calculadora.add(2));
console.log(calculadora.sub(2));
console.log(calculadora.mult(4));
console.log(calculadora.div(2));
const subCalculadora = new SubCalculadora(calculadora.number);
console.log(subCalculadora.pow(2)); */

type AvailableMethods = 'get' | 'post';

// Builder - GoF
export class RequestBuilder {
  public method?: AvailableMethods = undefined;
  public url?: string = undefined;

  setMethod(method: AvailableMethods): this {
    this.method = method;
    return this;
  }

  setUrl(url: string): this {
    this.url = url;
    return this;
  }

  send(): void {
    if (!this.method) {
      throw new Error('Method not set');
    }
    if (!this.url) {
      throw new Error('Url not set');
    }
    console.log(`Usando método ${this.method} para a URL: ${this.url}`);
  }
}

const requestBuilder = new RequestBuilder()
  .setMethod('get')
  .setUrl('https://www.someApi.com')
  .send();
