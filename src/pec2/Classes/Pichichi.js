export default class Pichichi {
  constructor(datos) {
    this.datos_api = datos;
  }

  mostrarClasificacionPichichi() {
    // console.log(this.datos_api);
    var mostrar = '';
    var array_mostrar = [];
    for (var i = this.datos_api.length - 1; i >= 0; i--) {
      var aux = this.datos_api[i];
      array_mostrar.unshift('Jugador ' + aux.player.name + ':' + aux.numberOfGoals + ' goles');
    }
    console.log(array_mostrar);
  }
}
