type Adder = {
  (x: number): number;
  (x: number, y: number): number;
  (...args: number[]): number;
};

const adder: Adder = function (
  x?: number,
  y?: number,
  ...args: number[]
): number {
  let initialValue = 0;
  if (x) initialValue += x;
  if (y) initialValue += y;
  if (args.length > 0) initialValue += args.reduce((p, v) => p + v, 0);
  return initialValue;
};

console.log(adder(1, 5, 34, 23));
