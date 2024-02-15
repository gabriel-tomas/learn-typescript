type HaveName = { name: string };
type HaveSurname = { surname: string };
type HaveAge = { age: number };
type Person = HaveName & HaveSurname & HaveAge;

type AB = 'A' | 'B';
type AC = 'A' | 'C';
type AD = 'D' | 'A';
type Intersection = AB & AC & AD;

const pessoa1: Person = {
  name: 'Gabriel',
  surname: 'Tomás',
  age: 19,
};

export default 0;
