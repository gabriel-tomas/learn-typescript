type VerifyUser = (user: User, sentUser: User) => boolean;
type User = { username: string; password: string };

const verifyUser: VerifyUser = (user, sentUser) => {
  return (
    user.username === sentUser.username && user.password === sentUser.password
  );
};

const bdUser = { username: 'gabriel', password: '123456' };
const sentUser = { username: 'gabriel', password: '123456' };

const loggedIn = verifyUser(bdUser, sentUser);
console.log(loggedIn);

type Pessoa = { nome: string; idade: number };

let pessoa1: Pessoa = { nome: 'Alice', idade: 30 };
const pessoa2 = { nome: 'Bob', idade: 25, cidade: 'New York' };

pessoa1 = pessoa2;

export default 0;
