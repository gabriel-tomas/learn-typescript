interface GetObjectKeyValue {
  <O, K extends keyof O>(object: O, key: K): O[K];
}

const getKeyValue: GetObjectKeyValue = (object, key) => object[key];

const carro = {
  marca: 'Ford',
  modelo: 'Mustang',
  ano: 2020,
};

console.log(getKeyValue(carro, 'ano'));
