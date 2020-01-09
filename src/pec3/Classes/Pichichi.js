import Tabla from './Tabla.js';
export default class Pichichi {
  constructor(datos) {
    this.datos_api = datos;
  }

  mostrarClasificacionPichichi() {
    // console.log(this.datos_api);
    // var mostrar = "";
    // var array_mostrar = [];

    const class_tabla = new Tabla();
    var table = class_tabla.crearTabla('scorers');
    this.meterCabeceraTablaPichichi(table);

    for (var i = 0; this.datos_api.length > i; i++) {
      var aux = this.datos_api[i];
      // array_mostrar.unshift('Jugador '+aux.player.name+':'+aux.numberOfGoals+' goles');
      this.insertarPosicionPichichi(table, aux);
    }
    // console.log(array_mostrar);
  }

  insertarPosicionPichichi(table, aux) {
    const row = document.createElement('tr');
    const class_tabla = new Tabla();

    class_tabla.addTdRow(table, row, aux.player.name);
    class_tabla.addTdRow(table, row, aux.team.name, 'button_team button_team_' + aux.team.id);
    class_tabla.addTdRow(table, row, aux.numberOfGoals);
  }
  meterCabeceraTablaPichichi(table) {
    const class_tabla = new Tabla();
    const row_th = document.createElement('tr');
    table.appendChild(class_tabla.addThRow(row_th, 'PLAYER'));
    table.appendChild(class_tabla.addThRow(row_th, 'TEAM'));
    table.appendChild(class_tabla.addThRow(row_th, 'GOALS'));
  }
}
