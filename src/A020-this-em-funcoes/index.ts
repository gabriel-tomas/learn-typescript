export function func(this: Date, argumento1: string): void {
  console.log(this);
  console.log(argumento1);
}

func.call(new Date(), 'gabriel');
