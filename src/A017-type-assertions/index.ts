const body1 = document.querySelector('body');
if (body1) body1.style.backgroundColor = 'red';

// Non-null assertion (!)
const body2 = document.querySelector('body')!;
body2.style.backgroundColor = 'blue';

// Type assertion
const body3 = document.querySelector('body') as HTMLBodyElement;
body3.style.backgroundColor = 'blue';

const input = document.querySelector('.input') as HTMLInputElement;
input.value;

// Type assertion
let body4 = document.querySelector('body') as unknown as number;
body4 = 23;
