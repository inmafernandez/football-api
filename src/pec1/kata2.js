export default function suma_de_elementos_positivos(array) {
  for (var i = 0, suma = 0; i <= array.length; i++) {
    if (array[i] >= 0) {
      suma += array[i];
    }
  }
  return suma;
}
