type MapStringsCallback = (item: string) => string;

function mapStrings(array: string[], callback: MapStringsCallback): string[] {
  const result: string[] = [];
  for (const value of array) {
    result.push(callback(value) || value);
  }
  return result;
}

const array1 = ['Olá', 'Mundo'];

const newArray1 = mapStrings(array1, (value) => {
  console.log(value);
  return value.toUpperCase();
});

console.log(newArray1);

export default 0;
