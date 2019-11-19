import plantarArbol from './kata9.3';

describe('Kata #9.3: plantarArbol', () => {
  test('ObtenerEspecie', () => {
    expect(plantarArbol()).toHaveProperty('obtenerEspecie');
  });
  test('ObtenerFruta', () => {
    expect(plantarArbol()).toHaveProperty('obtenerFruta');
  });
  test('Fruta', () => {
    expect(plantarArbol('peral', 'pera').obtenerFruta()).toBe('pera');
  });
  test('Especie', () => {
    expect(plantarArbol('peral', 'pera').obtenerEspecie()).toBe('peral');
  });
});
