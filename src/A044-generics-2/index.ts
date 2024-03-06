const arrayNumbers: Array<number> = [1, 2, 3, 4, 5];

export async function promiseAsync(): Promise<object> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ abc: 123 });
    }, 1000);
  });
}

promiseAsync().then((res) => console.log(res));
