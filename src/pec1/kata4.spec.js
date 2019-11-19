import elimina_primer_y_ultimo from './kata4';

describe('Kata #4: elimina_primer_y_ultimo', () => {
  test('JavaScript', () => {
    expect(elimina_primer_y_ultimo('JavaScript')).toString();
  });
  test('Alejandría', () => {
    expect(elimina_primer_y_ultimo('Alejandría')).toString();
  });
  test('hidrógeno', () => {
    expect(elimina_primer_y_ultimo('hidrógeno')).toString();
  });
  test('ok', () => {
    expect(elimina_primer_y_ultimo('ok')).toString();
  });
});
