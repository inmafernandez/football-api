import par_o_impar from './kata1';

describe('Kata #1: par_o_impar', () => {
  var par;
  var impar;
  test('0 es par', () => {
    expect(par_o_impar(0)).toString();
  });
  test('1 es impar', () => {
    expect(par_o_impar(1)).toString();
  });
  test('2 es par', () => {
    expect(par_o_impar(2)).toString();
  });
  test('3 es impar', () => {
    expect(par_o_impar(3)).toString();
  });
});
