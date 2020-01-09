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

    var result_equipos_clasificacion = prepareStandings(equipos_clasificacion);
  } catch (err) {
    console.log('error getStandings');
  }
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
    var result_calendario = prepareCalendario(calendario);
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
    var clasificacion_pichichis = prepareClasificacionPichichi(clasificacionPichichis);
  } catch (err) {
    console.log('error getClasificacionPichichi');
  }
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
    var detalles_equipos = prepareEquipos(equipos);
  } catch (err) {
    console.log('error getEquipos');
  }
}
