import Tabla from './Tabla.js';
export default class Calendario {
  constructor(datos) {
    this.datos_api = datos;
  }

  mostrarCalendario() {
    var array_mostrar = [];

    const class_tabla = new Tabla();
    var table = class_tabla.crearTabla('calendario');
    this.meterCabeceraCalendario(table);

    for (var i = this.datos_api.length - 1; i >= 0; i--) {
      var aux = this.datos_api[i];
      array_mostrar.unshift(
        'Fecha ' + aux.utcDate + ':' + aux.homeTeam.name + ' - ' + aux.awayTeam.name
      );
    }
    console.log(array_mostrar);
  }

  insertarCalendario(table, aux) {
    const row = document.createElement('tr');
    const class_tabla = new Tabla();

    class_tabla.addTdRow(table, row, aux.position);
    class_tabla.addTdRow(table, row, aux.team.name, 'button_team button_team_' + aux.team.id);
    class_tabla.addTdRow(table, row, aux.playedGames);
    class_tabla.addTdRow(table, row, aux.won);
    class_tabla.addTdRow(table, row, aux.lost);
    class_tabla.addTdRow(table, row, aux.draw);
    class_tabla.addTdRow(table, row, aux.goalsFor);
    class_tabla.addTdRow(table, row, aux.goalsAgainst);
    class_tabla.addTdRow(table, row, aux.points);
  }
  meterCabeceraCalendario(table) {
    const class_tabla = new Tabla();
    const row_th = document.createElement('tr');
    table.appendChild(class_tabla.addThRow(row_th, 'RANK'));
    table.appendChild(class_tabla.addThRow(row_th, 'TEAM'));
    table.appendChild(class_tabla.addThRow(row_th, 'PLAYED GAMES'));
    table.appendChild(class_tabla.addThRow(row_th, 'WON'));
    table.appendChild(class_tabla.addThRow(row_th, 'LOST'));
    table.appendChild(class_tabla.addThRow(row_th, 'DRAW'));
    table.appendChild(class_tabla.addThRow(row_th, 'GOALS FOR'));
    table.appendChild(class_tabla.addThRow(row_th, 'GOALS AGAINST'));
    table.appendChild(class_tabla.addThRow(row_th, 'POINTS'));
  }
}
