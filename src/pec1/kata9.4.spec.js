import plantarArbol from './kata9.4';
var arbol = plantarArbol('peral', 'pera');

describe('Kata #9.4: plantarArbol', () => {
  test('objetos', () => {
    expect(plantarArbol('peral', 'pera')).toHaveProperty('obtenerEspecie');
  });
  test('objetos', () => {
    expect(plantarArbol('peral', 'pera')).toHaveProperty('definirEspecie');
  });
  test('objetos', () => {
    expect(plantarArbol('peral', 'pera')).toHaveProperty('obtenerFruta');
  });
  test('objetos', () => {
    expect(plantarArbol('peral', 'pera')).toHaveProperty('definirFruta');
  });
  test('definirFruta', () => {
    expect(arbol.definirFruta(12)).toString('manzana');
  });
  test('definirEspecie', () => {
    expect(arbol.definirEspecie(12)).toString('manzano');
  });
});
