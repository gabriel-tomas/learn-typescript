type CoresObj = typeof coresObj;
type CoresDisponiveis = keyof CoresObj;

const coresObj = {
  vermelho: 'red',
  verde: 'green',
  azul: 'blue',
};

function traduzirCor(cor: CoresDisponiveis, cores: CoresObj) {
  return cores[cor];
}

console.log(traduzirCor('vermelho', coresObj));
