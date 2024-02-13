/* eslint-disable */

// Tipos básicos (aqui ocorre inferência de tipos)
const nome: string = 'Gabriel';
const idade: number = 19;
const adulto: boolean = true;
const simbolo: symbol = Symbol('Qualquer simbolo');
/* const big: bigint = 10n; */

// Arrays
const arrayNumbers: Array<number> = [1, 2, 3, 4];
const arrayStrings: Array<string> = ['Gabriel', 'Luiz', 'Tomás', 'ABC'];
const arrayNumbers2: number[] = [1, 2, 3, 4, 5];
const arrayStrings2: string[] = ['Gabriel', 'Luiz', 'Tomás', 'ABC'];

// Objetos
const pessoa: {nome: string, idade: number, adulto?: boolean} = {
  nome: 'Gabriel',
  idade: 19,
};

// Funções
function sum(x :number, y: number): number {
  return x + y;
}

const sum2: (x: number, y: number) => number = (x, y) => x + y;
