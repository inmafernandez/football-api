import obtenerFruta from './kata8.2';
describe('Kata #8.2: obtenerFruta', () => {
  test('fruta', () => {
    expect(obtenerFruta({ fruta: 'Manzana' })).toBe('Manzana');
  });
  test('no fruta', () => {
    expect(obtenerFruta({ peral: 'Pera' })).toBe('no fruta');
  });
});
