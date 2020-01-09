import { COMPETITION_ID } from './config.js';
import {
  prepareStandings,
  prepareCalendario,
  prepareClasificacionPichichi,
  prepareEquipos
} from './util.js'; //Nuevo

const headers = new Headers();
headers.append('X-Auth-Token', '3c88ab5d863b476c9f1616f2c9a726ce');

export async function getStandings() {
  try {
    let respuesta = await fetch('https://api.football-data.org/v2/competitions/2014/standings', {
      method: 'get',
      headers
    });
    let data = await respuesta.json();
    // console.log(data);

    var equipos_clasificacion = data.standings[0].table;

    // var result_equipos_clasificacion=prepareStandings(equipos_clasificacion);
    return equipos_clasificacion;
  } catch (err) {
    console.log('error getStandings');
    console.log(err);
  }
}

export async function mostrar_table_clasificacion(clasificacion) {
  document.getElementById('content').style.display = 'block';
  var table_clasificacion = document.getElementById('table_calendario');
  if (table_clasificacion != null) {
    table_clasificacion.innerHTML = '';
  }
  document.getElementById('calendario').style.display = 'none';

  var Table = document.getElementById('table_content');
  console.log(Table);
  if (Table != null) {
    Table.innerHTML = '';
  }
  console.log(clasificacion);
  prepareStandings(clasificacion);
}

export async function getCalendario() {
  try {
    let respuesta = await fetch('https://api.football-data.org/v2/competitions/2014/matches', {
      method: 'get',
      headers
    });
    let data = await respuesta.json();
    // console.log(data);

    var calendario = data.matches;
    // console.log(calendario);
    // var result_calendario = prepareCalendario(calendario);
    return calendario;
  } catch (err) {
    console.log('error getCalendario');
  }
}

export async function getClasificacionPichichi() {
  try {
    let respuesta = await fetch('https://api.football-data.org/v2/competitions/2014/scorers', {
      method: 'get',
      headers
    });
    let data = await respuesta.json();
    // console.log(data.scorers);

    var clasificacionPichichis = data.scorers;
    // console.log(clasificacionPichichis);
    // var clasificacion_pichichis=prepareClasificacionPichichi(clasificacionPichichis);
    return clasificacionPichichis;
  } catch (err) {
    console.log('error getClasificacionPichichi');
  }
}

export async function mostrar_table_pichichi(pichichi) {
  var Table = document.getElementById('table_scorers');
  if (Table != null) {
    Table.innerHTML = '';
  }
  prepareClasificacionPichichi(pichichi);
}

export async function getEquipos() {
  try {
    let respuesta = await fetch('https://api.football-data.org/v2/competitions/2014/teams', {
      method: 'get',
      headers
    });
    let data = await respuesta.json();
    // console.log(data.teams);

    var equipos = data.teams;
    // // console.log(equipos);
    // var detalles_equipos=prepareEquipos(equipos);
    return equipos;
  } catch (err) {
    console.log('error getEquipos');
  }
}

export async function mostrar_table_equipo(equipo, id_equipo) {
  var Table = document.getElementById('table_team');
  if (Table != null) {
    Table.innerHTML = '';
  }
  prepareEquipos(equipo, id_equipo);
}

export async function mostrar_table_calendario(calendario) {
  document.getElementById('calendario').style.display = 'block';
  var table_content = document.getElementById('table_content');
  if (table_content != null) {
    table_content.innerHTML = '';
  }
  document.getElementById('content').style.display = 'none';

  var Table = document.getElementById('table_calendario');
  if (Table != null) {
    Table.innerHTML = '';
  }

  prepareCalendario(calendario);
}
