type FilterCallback<U> = (value: U, index?: number, array?: U) => boolean;

export function myFilter<T>(array: T[], callbackFn: FilterCallback<T>): T[] {
  const finalArray = [];
  for (let i = 0; i < array.length; i++) {
    callbackFn(array[i], i) && finalArray.push(array[i]);
  }
  return finalArray;
}

const arrayNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
/* const arrayStrings = ['ab', 'abc', 'a', 'b', 'abcde']; */

/* const arrayFilteredUnder5 = arrayNumbers.filter((value) => value < 5); */
const arrayMyFilterUnder5 = myFilter(arrayNumbers, (value) => value <= 2);
console.log(arrayMyFilterUnder5);
