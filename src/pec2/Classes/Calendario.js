export default class Calendario {
  constructor(datos) {
    this.datos_api = datos;
  }

  mostrarCalendario() {
    var mostrar = '';
    var array_mostrar = [];
    for (var i = this.datos_api.length - 1; i >= 0; i--) {
      var aux = this.datos_api[i];
      array_mostrar.unshift(
        'Fecha ' + aux.utcDate + ':' + aux.homeTeam.name + ' - ' + aux.awayTeam.name
      );
    }
    console.log(array_mostrar);
  }
}
