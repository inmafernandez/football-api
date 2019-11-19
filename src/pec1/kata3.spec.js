import repiteString from './kata3';

describe('Kata #3: repiteString', () => {
  test('JavaScript', () => {
    expect(repiteString('JavaScript', 0)).toString();
  });
  test('miau', () => {
    expect(repiteString('miau', 1)).toString();
  });
  test('hola', () => {
    expect(repiteString('hola', 0)).toString();
  });
  test('?', () => {
    expect(repiteString('?', 0)).toString();
  });
});
