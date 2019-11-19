export default function obtenerFruta(propiedad) {
  var arbol = { fruta: 'Manzana' };
  if (propiedad.hasOwnProperty('fruta')) {
    return propiedad.fruta;
  } else {
    return 'no fruta';
  }
}
