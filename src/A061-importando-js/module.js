export function sum(x, y) {
  if (typeof x !== 'number' && typeof y !== 'number') {
    return;
  }
  return x + y;
}
