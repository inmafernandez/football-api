import elimina_los_espacios from './kata5';

describe('Kata #5: elimina_los_espacios', () => {
  test('buenos días', () => {
    expect(elimina_los_espacios('buenos días')).toString();
  });
  test('   pastel de zanahoria   ', () => {
    expect(elimina_los_espacios('   pastel de zanahoria   ')).toString();
  });
  test('dábale arroz a la zorra el abad', () => {
    expect(elimina_los_espacios('dábale arroz a la zorra el abad')).toString();
  });
});
