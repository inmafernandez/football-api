export default function plantarArbol(especie, fruta) {
  return {
    especie,
    fruta,
    obtenerFruta: function() {
      return this.fruta;
    }
  };
}
