import _ from 'lodash';

_.mul = function (array: number[]): number {
  return array.reduce((ac, v) => ac * v, 1);
};

export default _;
