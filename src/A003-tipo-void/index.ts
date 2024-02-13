function withoutReturn(...args: string[]): void {
  console.log(args.join(''));
}

const pessoa = {
  nome: 'Gabriel',
  sobrenome: 'Tomás',

  showName(): void {
    console.log('O nome da pessoa é: ' + this.nome);
  },
};

withoutReturn('Olá', ',', ' Mundo!');
pessoa.showName();

export { pessoa };
