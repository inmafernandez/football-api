export default function presentarArbol(nuestro_arbol, nuestra_fruta) {
  this.arbol = nuestro_arbol;
  this.fruta = nuestra_fruta;
  this.obtenerEspecie = function() {
    return 'Este árbol es un ' + this.arbol + ' y da ' + this.fruta;
  };
}
