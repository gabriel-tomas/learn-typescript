type Name = string;
type PrimaryColors = 'Red' | 'Yellow' | 'Blue';
type SecondaryColors = 'Orange' | 'Green' | 'Violet';
type Colors = PrimaryColors | SecondaryColors;
type Person = {
  name: Name;
  age: number;
  isAdult?: boolean;
  preferredRGBColor?: Colors;
};

const pessoa: Person = {
  name: 'Gabriel',
  age: 19,
  isAdult: true,
};

console.log(setPreferredRGBColor(pessoa, 'Orange'));

function setPreferredRGBColor(person: Person, color: Colors): Person {
  return { ...person, preferredRGBColor: color };
}

export default 0;
