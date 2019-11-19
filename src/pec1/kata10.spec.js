import presentarArbol from './kata10';
var arbol = new presentarArbol('manzano', 'manzana');
describe('Kata #10: plantarArbol', () => {
  test('string', () => {
    expect(arbol.obtenerEspecie('manzano', 'manzana')).toBe(
      'Este árbol es un manzano y da manzana'
    );
  });
});
