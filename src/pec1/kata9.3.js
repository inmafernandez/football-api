export default function plantarArbol(especie, fruta) {
  return {
    obtenerEspecie: function(nuevaEspecie) {
      this.especie = nuevaEspecie;
    },

    obtenerFruta: function(nuevaFruta) {
      this.fruta = nuevaFruta;
    },

    obtenerEspecie() {
      return especie;
    },

    obtenerFruta() {
      return fruta;
    }
  };
}
