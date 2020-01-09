import {
  getStandings,
  getCalendario,
  getClasificacionPichichi,
  getEquipos,
  mostrar_table_clasificacion,
  mostrar_table_pichichi,
  mostrar_table_equipo,
  mostrar_table_calendario
} from './api.js';

var clasificacion, pichichi, equipo, calendario;
export default async function init() {
  console.log('Saludos desde la PEC2');
  clasificacion = await getStandings();
  // console.log(clasificacion);
  calendario = await getCalendario();
  // console.log(calendario);
  pichichi = await getClasificacionPichichi();
  equipo = await getEquipos();
  console.log('equipo');
  actualizar_dom();
}
init();

window.onload = function() {
  //Listener de Clasificacion
  var el = document.getElementById('button_standing');
  el.addEventListener('click', mostrar_clasificacion, false);

  //Listener de Pichichi
  var el_pichichi = document.getElementById('button_scorers');
  el_pichichi.addEventListener('click', mostrar_pichichi, false);

  //Listener de Calendario
  var el_calendario = document.getElementById('button_matches');
  el_calendario.addEventListener('click', mostrar_calendario, false);
};

function mostrar_clasificacion() {
  var a = mostrar_table_clasificacion(clasificacion);
  actualizar_dom();
}

function mostrar_pichichi() {
  var a = mostrar_table_pichichi(pichichi);
  actualizar_dom();
}

//Listener de Equipo
// var el_equipo = document.getElementsByClassName("button_team");

// el_equipo.addEventListener( "click" , mostrar_equipo, false );
function mostrar_equipo() {
  // mostrar_table_equipo(equipo);
  console.log('entra');
}

function mostrar_calendario() {
  mostrar_table_calendario(calendario);
  actualizar_dom();
}

function actualizar_dom() {
  var elements = document.querySelectorAll('.button_team');
  var i;
  for (i = 0; i < elements.length; ++i) {
    elements[i].addEventListener('click', function(e) {
      // console.log("entra");
      // console.log(e.srcElement.className);
      var id_equipo = e.srcElement.className;
      id_equipo = id_equipo.replace(/button_team/g, '');
      id_equipo = id_equipo.replace(/ /g, '');
      id_equipo = id_equipo.replace(/_/g, '');
      // console.log(id_equipo);
      mostrar_table_equipo(equipo, id_equipo);
    });
  }
}
