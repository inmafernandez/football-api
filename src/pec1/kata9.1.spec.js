import plantarArbol from './kata9.1';
describe('Kata #9.1: plantarArbol', () => {
  test('objeto', () => {
    expect(plantarArbol('peral', 'pera')).toEqual({ especie: 'peral', fruta: 'pera' });
  });
  test('null', () => {
    expect(plantarArbol()).toBeNull();
  });
});
