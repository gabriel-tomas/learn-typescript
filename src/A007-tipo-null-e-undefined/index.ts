function createPerson(
  firstName: string,
  lastName?: string,
): {
  firstName: string;
  lastName?: string;
} {
  return {
    firstName,
    lastName,
  };
}

function squareOf(x: any) {
  return typeof x === 'number' ? x * x : null;
}

console.log(squareOf(10));

export default {};
