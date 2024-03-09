import validator from 'validator';
import _ from 'lodash';

const obj = {
  nome: 'Gabriel',
  sobrenome: 'Tomás',
};

console.log(_.get(obj, 'nome', null));
console.log(validator.isEmail('test@example.com'));
