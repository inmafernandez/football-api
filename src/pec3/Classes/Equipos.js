import Tabla from './Tabla.js';
export default class Equipos {
  constructor(datos) {
    this.datos_api = datos;
  }

  mostrarEquipos(id_equipo) {
    console.log(this.datos_api);
    // var mostrar = "";
    var array_mostrar = [];

    const class_tabla = new Tabla();
    var table = class_tabla.crearTabla('team');
    this.meterCabeceraTablaEquipo(table);

    console.log(id_equipo);
    for (var i = 0; this.datos_api.length > i; i++) {
      var aux = this.datos_api[i];
      array_mostrar.unshift('Equipo ' + aux.name);
      // this.insertarPosicionPichichi(table,aux);
      if (aux.id == id_equipo) {
        this.insertarPosicionEquipo(table, aux);
        console.log(aux);
        // <img src="http://upload.wikimedia.org/wikipedia/de/a/aa/Fc_barcelona.svg">
      }
    }
    // console.log(array_mostrar);

    // <tr>
    //           <td><img src="http://upload.wikimedia.org/wikipedia/de/a/aa/Fc_barcelona.svg"></td>
    //           <td>FC Barcelona</td>
    //           <td>Camp Nou</td>
    //           <td>http://www.fcbarcelona.com</td>
    //         </tr>
  }

  insertarPosicionEquipo(table, aux) {
    const row = document.createElement('tr');
    const class_tabla = new Tabla();

    var x = document.createElement('IMG');
    x.setAttribute('src', aux.crestUrl);
    x.setAttribute('width', '20');
    document.body.appendChild(x);
    row.appendChild(x);

    class_tabla.addTdRow(table, row, aux.name);
    class_tabla.addTdRow(table, row, aux.venue);
    class_tabla.addTdRow(table, row, aux.website);
  }
  meterCabeceraTablaEquipo(table) {
    const class_tabla = new Tabla();
    const row_th = document.createElement('tr');
    table.appendChild(class_tabla.addThRow(row_th, 'LOGO'));
    table.appendChild(class_tabla.addThRow(row_th, 'TEAM'));
    table.appendChild(class_tabla.addThRow(row_th, 'STADIUM'));
    table.appendChild(class_tabla.addThRow(row_th, 'WEBSITE'));
  }
}
