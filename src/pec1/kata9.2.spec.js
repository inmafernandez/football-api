import plantarArbol from './kata9.2';

describe('Kata #9.2: plantarArbol', () => {
  test('especie', () => {
    expect(plantarArbol('peral', 'pera')).toHaveProperty('especie');
  });
  test('fruta', () => {
    expect(plantarArbol('peral', 'pera')).toHaveProperty('fruta');
  });
  test('obtenerFruta', () => {
    expect(plantarArbol('peral', 'pera').obtenerFruta()).toBe('pera');
  });
});
