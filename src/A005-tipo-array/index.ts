function multArgs(...args: Array<number>): number {
  return args.reduce((ac, value) => value * ac, 1);
}

function concatStrings(...args: string[]): string {
  return args.reduce((ac, value) => ac + value).trim();
}

function upperCaseAll(...args: string[]): string[] {
  return args.map((value) => value.toUpperCase());
}

console.log(upperCaseAll('a', 'olá mundo!', 'sIM'));

export default {};
