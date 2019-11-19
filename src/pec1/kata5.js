export default function elimina_los_espacios(String) {
  var sinespacio = '';
  var arreglo = String.split(' ');
  for (var i = 0; i < arreglo.length; i++) {
    if (arreglo[i] != '') {
      sinespacio += arreglo[i];
    }
  }
  return sinespacio;
}
