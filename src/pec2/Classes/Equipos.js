export default class Equipos {
  constructor(datos) {
    this.datos_api = datos;
  }

  mostrarEquipos() {
    // console.log(this.datos_api);
    var mostrar = '';
    var array_mostrar = [];
    for (var i = this.datos_api.length - 1; i >= 0; i--) {
      var aux = this.datos_api[i];
      array_mostrar.unshift('Equipo ' + aux.name);
    }
    console.log(array_mostrar);
  }
}
