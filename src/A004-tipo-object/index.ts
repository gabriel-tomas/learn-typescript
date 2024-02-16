const objectA: {
  readonly keyA: string;
  keyB: string;
  [key: string]: unknown;
} = {
  keyA: 'Value A',
  keyB: 'Value B',
};

objectA.keyC = 5;

console.log(objectA);

export default 0;
