export function isNumber(value: unknown): value is number {
  return typeof value === 'number';
}

function soma<T>(...args: T[]): number {
  const result = args.reduce((s, v) => {
    if (isNumber(s) && isNumber(v)) {
      return s + v;
    }
    return s;
  }, 0);
  return result;
}

console.log(soma(1, 2, 3, 4, 5));
console.log(soma<string | number>(1, 2, 3, 4, 'a', 1));
console.log(soma('a', 'b', 'c', 'd', 'e'));
