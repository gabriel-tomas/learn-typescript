let x = 25;
x = 26;
const y = 30;
let z = 100 as const; // eslint-disable-line

const pessoa = {
  nome: 'Gabriel' as const,
  sobrenome: 'Tomás',
};

function choiceColor(cor: 'Vermelho' | 'Verde' | 'Azul') {
  return cor;
}

choiceColor('Vermelho');

export default 0;
