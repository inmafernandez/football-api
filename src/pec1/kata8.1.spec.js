import { arbol } from './kata8.1';

describe('Kata #8.1: arbol', () => {
  test('es una manzana', () => {
    expect(arbol.obtenerFruta()).toBe('manzana');
  });
});
