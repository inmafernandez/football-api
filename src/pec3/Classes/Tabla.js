export default class Tabla {
  constructor() {}

  crearTabla(id_div) {
    var table = document.getElementById('table_' + id_div);
    if (table == null) {
      table = document.createElement('table');
      table.setAttribute('id', 'table_' + id_div);
      const targetDiv = document.getElementById(id_div);
      targetDiv.appendChild(table);
    }

    return table;
  }
  addThRow(row, valor) {
    const cell = document.createElement('th');
    cell.textContent = valor;
    row.appendChild(cell);
    return row;
  }

  addTdRow(table, row, valor, class_td) {
    const cell = document.createElement('td');
    cell.textContent = valor;
    if (class_td != null && class_td != '') {
      cell.setAttribute('class', class_td);
    }
    row.appendChild(cell);
    table.appendChild(row);
  }
}
