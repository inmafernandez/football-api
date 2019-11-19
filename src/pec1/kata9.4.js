export default function plantarArbol(especie, fruta) {
  var objetoplantar = {
    obtenerEspecie() {
      return especie;
    },

    obtenerFruta() {
      return fruta;
    },

    definirEspecie(nuevaEspecie) {
      this.especie = nuevaEspecie;
    },

    definirFruta(nuevaFruta) {
      this.fruta = nuevaFruta;
    }
  };

  return objetoplantar;
}
