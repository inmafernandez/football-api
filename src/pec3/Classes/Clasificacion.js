import Tabla from './Tabla.js';
// import Actualizar_dom from './Actualizar_dom.js';
export default class Clasificacion {
  constructor(datos) {
    this.datos_api = datos;
  }

  mostrarClasificacion() {
    // var array_mostrar = [];

    const class_tabla = new Tabla();
    var table = class_tabla.crearTabla('content');
    this.meterCabeceraTabla(table);

    for (var i = 0; this.datos_api.length > i; i++) {
      var aux = this.datos_api[i];
      // console.log(aux);
      // array_mostrar.unshift('Posicion '+aux.position+':'+aux.team.name+' '+aux.points+' puntos');
      this.insertarPosicion(table, aux);
    }
    // var class_actualizar_dom = new Actualizar_dom();
    // class_actualizar_dom.actualizar_dom();
    // console.log("Clasificacion");
    // console.log(array_mostrar);
  }
  insertarPosicion(table, aux) {
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
  meterCabeceraTabla(table) {
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
