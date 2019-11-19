import suma_de_elementos_positivos from './kata2';

describe('Kata #2: suma_de_elementos_positivos', () => {
  test('0', () => {
    expect(suma_de_elementos_positivos([])).toBe(0);
  });
  test('15', () => {
    expect(suma_de_elementos_positivos([1, 2, 3, 4, 5])).toBe(15);
  });
  test('13', () => {
    expect(suma_de_elementos_positivos([1, -2, 3, 4, 5])).toBe(13);
  });
  test('9', () => {
    expect(suma_de_elementos_positivos([-1, 2, 3, 4, -5])).toBe(9);
  });
  test('0', () => {
    expect(suma_de_elementos_positivos([-1, -2, -3, -4, -5])).toBe(0);
  });
});
