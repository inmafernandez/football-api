export default class Clasificacion {
  constructor(datos) {
    this.datos_api = datos;
  }

  mostrarClasificacion() {
    var mostrar = '';
    var array_mostrar = [];
    for (var i = this.datos_api.length - 1; i >= 0; i--) {
      var aux = this.datos_api[i];
      array_mostrar.unshift(
        'Posicion ' + aux.position + ':' + aux.team.name + ' ' + aux.points + ' puntos'
      );
    }
    console.log(array_mostrar);
  }
}
